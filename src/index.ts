import { basekit, FieldType, field, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

basekit.addField({
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      'zh-CN': {
        'fieldsLabel': '选择要拼接的字段',
        'separatorLabel': '拼接符',
        'separatorPlaceholder': '输入拼接符,留空则默认换行',
        'resultTitle': '拼接结果',
        'newline': '换行',
        'comma': '逗号',
        'space': '空格',
        'semicolon': '分号',
        'pipe': '管道符',
        'custom': '自定义',
      },
      'en-US': {
        'fieldsLabel': 'Select fields to concatenate',
        'separatorLabel': 'Separator',
        'separatorPlaceholder': 'Enter separator, leave empty for newline',
        'resultTitle': 'Concatenated Result',
        'newline': 'Newline',
        'comma': 'Comma',
        'space': 'Space',
        'semicolon': 'Semicolon',
        'pipe': 'Pipe',
        'custom': 'Custom',
      },
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'fields',
      label: t('fieldsLabel'),
      component: FieldComponent.FieldSelect,
      props: {
        mode: 'multiple', // 支持多选
        supportType: [
          FieldType.Text,
          FieldType.Number,
          FieldType.SingleSelect,
          FieldType.MultiSelect,
          FieldType.Url,
          FieldType.DateTime,
      ],
      },
      validator: {
        required: true,
      }
},
    {
      key: 'separatorType',
      label: t('separatorLabel'),
      component: FieldComponent.Radio,
      props: {
        options: [
          { label: t('newline'), value: 'newline' },
          { label: t('comma'), value: 'comma' },
          { label: t('space'), value: 'space' },
          { label: t('semicolon'), value: 'semicolon' },
          { label: t('pipe'), value: 'pipe' },
          { label: t('custom'), value: 'custom' },
      ]
      },
    },
    {
      key: 'customSeparator',
      label: t('custom'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('separatorPlaceholder'),
      },
    },
],
// 定义捷径的返回结果类型为多行文本
resultType: {
  type: FieldType.Text,
},
// formItemParams 为运行时传入的字段参数,对应字段配置里的 formItems
execute: async (formItemParams: {
  fields: any[],
  separatorType: { label: string, value: string },
  customSeparator: string
}, context) => {
  const { fields = [], separatorType, customSeparator = '' } = formItemParams;

  /** 为方便查看日志,使用此方法替代console.log */
  function debugLog(arg: any) {
    // @ts-ignore
    console.log(JSON.stringify({
      formItemParams,
      context,
      arg
    }))
  }

  try {
    debugLog({
      '===1 开始处理字段拼接': { fieldsCount: fields.length, separatorType, customSeparator }
    });

    if (!fields || fields.length === 0) {
      return {
        code: FieldCode.Error,
      }
    }

    // 确定分隔符
    let separator = '\n'; // 默认换行
    if (separatorType && separatorType.value) {
      switch (separatorType.value) {
        case 'newline':
          separator = '\n';
          break;
        case 'comma':
          separator = ',';
          break;
        case 'space':
          separator = ' ';
          break;
        case 'semicolon':
          separator = ';';
          break;
        case 'pipe':
          separator = '|';
          break;
        case 'custom':
          separator = customSeparator || '\n';
          break;
        default:
          separator = '\n';
      }
    }

    debugLog({
      '===2 确定分隔符': separator
    });

    // 处理每个字段的值并转换为字符串
    const processedValues: string[] = [];

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      let fieldValue = '';

      if (field === null || field === undefined) {
        fieldValue = '';
      } else if (typeof field === 'string') {
        fieldValue = field;
      } else if (typeof field === 'number') {
        fieldValue = field.toString();
      } else if (typeof field === 'boolean') {
        fieldValue = field ? 'true' : 'false';
      } else if (Array.isArray(field)) {
        // 处理数组类型（如文本字段的富文本、多选字段等）
        if (field.length > 0) {
          if (typeof field[0] === 'string') {
            // 多选字段
            fieldValue = field.join(', ');
          } else if (field[0] && typeof field[0] === 'object') {
            // 文本字段的富文本格式
            fieldValue = field.map(item => {
              if (item.type === 'text') {
                return item.text || '';
              } else if (item.type === 'url') {
                return item.text || item.link || '';
              } else if (item.type === 'mention') {
                return item.text || item.name || '';
              } else {
                return item.text || item.toString();
              }
            }).join('');
          } else {
            fieldValue = field.join(', ');
          }
        }
      } else if (typeof field === 'object') {
        // 处理对象类型
        if (field.link && field.title) {
          // URL字段
          fieldValue = field.title || field.link;
        } else if (field.text) {
          fieldValue = field.text;
        } else if (field.name) {
          fieldValue = field.name;
        } else {
          // 尝试获取对象的字符串表示
          fieldValue = JSON.stringify(field);
        }
      } else {
        fieldValue = field.toString();
      }

      // 只添加非空值
      if (fieldValue.trim()) {
        processedValues.push(fieldValue.trim());
      }
    }

    debugLog({
      '===3 处理后的值': { valuesCount: processedValues.length }
    });

    // 拼接所有值
    const result = processedValues.join(separator);

    debugLog({
      '===4 拼接完成': { resultLength: result.length }
    });

    // 检查结果长度,支持大量字符但给出警告
    if (result.length > 100000) {
      debugLog({
        '===5 警告': '结果超过10万字符,可能影响性能'
      });
    }

    return {
      code: FieldCode.Success,
      data: result,
    }

  } catch (e) {
    console.log('====error', String(e));
    debugLog({
      '===999 异常错误': String(e)
    });

    return {
      code: FieldCode.Error,
    }
  }
},
});

export default basekit;