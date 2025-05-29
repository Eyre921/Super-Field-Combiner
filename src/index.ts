import { basekit, FieldType, field, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

basekit.addField({
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      'zh-CN': {
        'fieldsLabel': '选择要拼接的字段',
        'separatorLabel': '字段间连接符',
        'separatorPlaceholder': '输入字段间的连接符，留空则默认换行',
        'totalPrefixLabel': '总前缀',
        'totalPrefixPlaceholder': '在拼接结果前添加的标题文字（可选）',
        'totalSuffixLabel': '总后缀',
        'totalSuffixPlaceholder': '在拼接结果后添加的标题文字（可选）',
        'totalHeaderLevelLabel': '总前缀/后缀标题等级',
        'betweenTextLabel': '字段间插入文字',
        'betweenTextPlaceholder': '在每两个字段值之间插入的文字（可选）',
        'fieldPrefixesLabel': '每个字段的前缀',
        'fieldPrefixesPlaceholder': '为每个字段添加前缀，用|分隔，如：姓名|年龄|部门',
        'fieldHeaderLevelLabel': '字段前缀标题等级',
        'resultTitle': '拼接结果',
        'newline': '换行',
        'comma': '逗号',
        'space': '空格',
        'semicolon': '分号',
        'pipe': '管道符',
        'custom': '自定义',
        'h1': '一级标题 #',
        'h2': '二级标题 ##',
        'h3': '三级标题 ###',
        'h4': '四级标题 ####',
        'h5': '五级标题 #####',
        'h6': '六级标题 ######',
      },
      'en-US': {
        'fieldsLabel': 'Select fields to concatenate',
        'separatorLabel': 'Field separator',
        'separatorPlaceholder': 'Enter separator between fields, leave empty for newline',
        'totalPrefixLabel': 'Total prefix',
        'totalPrefixPlaceholder': 'Title text to add before the result (optional)',
        'totalSuffixLabel': 'Total suffix',
        'totalSuffixPlaceholder': 'Title text to add after the result (optional)',
        'totalHeaderLevelLabel': 'Total prefix/suffix header level',
        'betweenTextLabel': 'Text between fields',
        'betweenTextPlaceholder': 'Text to insert between each two field values (optional)',
        'fieldPrefixesLabel': 'Prefix for each field',
        'fieldPrefixesPlaceholder': 'Add prefix for each field, separated by |, e.g.: Name|Age|Department',
        'fieldHeaderLevelLabel': 'Field prefix header level',
        'resultTitle': 'Concatenated Result',
        'newline': 'Newline',
        'comma': 'Comma',
        'space': 'Space',
        'semicolon': 'Semicolon',
        'pipe': 'Pipe',
        'custom': 'Custom',
        'h1': 'H1 #',
        'h2': 'H2 ##',
        'h3': 'H3 ###',
        'h4': 'H4 ####',
        'h5': 'H5 #####',
        'h6': 'H6 ######',
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
          FieldType.Checkbox,
        ],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'totalHeaderLevel',
      label: t('totalHeaderLevelLabel'),
      component: FieldComponent.SingleSelect,
      props: {
        options: [
          { label: t('h1'), value: 'h1' },
          { label: t('h2'), value: 'h2' },
          { label: t('h3'), value: 'h3' },
          { label: t('h4'), value: 'h4' },
          { label: t('h5'), value: 'h5' },
          { label: t('h6'), value: 'h6' },
        ]
      },
    },
    {
      key: 'totalPrefixText',
      label: t('totalPrefixLabel'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('totalPrefixPlaceholder'),
      },
    },
    {
      key: 'totalSuffixText',
      label: t('totalSuffixLabel'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('totalSuffixPlaceholder'),
      },
    },
    {
      key: 'fieldHeaderLevel',
      label: t('fieldHeaderLevelLabel'),
      component: FieldComponent.SingleSelect,
      props: {
        options: [
          { label: t('h1'), value: 'h1' },
          { label: t('h2'), value: 'h2' },
          { label: t('h3'), value: 'h3' },
          { label: t('h4'), value: 'h4' },
          { label: t('h5'), value: 'h5' },
          { label: t('h6'), value: 'h6' },
        ]
      },
    },
    {
      key: 'fieldPrefixes',
      label: t('fieldPrefixesLabel'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('fieldPrefixesPlaceholder'),
      },
      tooltips: [
        {
          type: 'text',
          content: '为每个字段添加前缀文字，按字段选择顺序用"|"分隔。例如：第一个字段前缀|第二个字段前缀|第三个字段前缀'
        },
        {
          type: 'text',
          content: '如果某个字段不需要前缀，可以留空，如：姓名||部门（中间的年龄字段无前缀）'
        }
      ],
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
    {
      key: 'betweenText',
      label: t('betweenTextLabel'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('betweenTextPlaceholder'),
      },
      tooltips: [
        {
          type: 'text',
          content: '在每两个字段值之间插入的文字，会与连接符一起使用'
        }
      ],
    },
  ],
  // 定义捷径的返回结果类型为多行文本
  resultType: {
    type: FieldType.Text,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems
  execute: async (formItemParams: {
    fields: any[],
    separatorType: { label: string, value: string },
    customSeparator: string,
    betweenText: string,
    totalPrefixText: string,
    totalSuffixText: string,
    fieldPrefixes: string,
    totalHeaderLevel: { label: string, value: string },
    fieldHeaderLevel: { label: string, value: string }
  }, context) => {
    const {
      fields = [],
      separatorType,
      customSeparator = '',
      betweenText = '',
      totalPrefixText = '',
      totalSuffixText = '',
      fieldPrefixes = '',
      totalHeaderLevel,
      fieldHeaderLevel
    } = formItemParams;

    /** 为方便查看日志，使用此方法替代console.log */
    function debugLog(arg: any) {
      // @ts-ignore
      console.log(JSON.stringify({
        formItemParams,
        context,
        arg
      }))
    }

    // 获取Markdown标题前缀的函数
    function getMarkdownPrefix(headerLevel: { label: string, value: string } | undefined): string {
      if (!headerLevel || !headerLevel.value) {
        return '#'; // 默认一级标题
      }

      switch (headerLevel.value) {
        case 'h1':
          return '#';
        case 'h2':
          return '##';
        case 'h3':
          return '###';
        case 'h4':
          return '####';
        case 'h5':
          return '#####';
        case 'h6':
          return '######';
        default:
          return '#';
      }
    }

    // 改进的字段值处理函数
    function processFieldValue(field: any): string {
      debugLog({
        '处理字段值': { field, type: typeof field, isArray: Array.isArray(field) }
      });

      if (field === null || field === undefined) {
        return '';
      }

      if (typeof field === 'string') {
        return field;
      }

      if (typeof field === 'number') {
        return field.toString();
      }

      if (typeof field === 'boolean') {
        return field ? '是' : '否';
      }

      if (Array.isArray(field)) {
        if (field.length === 0) {
          return '';
        }

        // 处理富文本字段
        if (field[0] && typeof field[0] === 'object' && field[0].type) {
          return field.map(item => {
            if (item.type === 'text') {
              return item.text || '';
            } else if (item.type === 'url') {
              return item.text || item.link || '';
            } else if (item.type === 'mention') {
              return item.text || item.name || '';
            } else {
              return item.text || JSON.stringify(item);
            }
          }).join('');
        }

        // 处理多选字段或其他数组
        return field.map(item => {
          if (typeof item === 'string') {
            return item;
          } else if (item && typeof item === 'object') {
            return item.name || item.text || item.label || JSON.stringify(item);
          } else {
            return String(item);
          }
        }).join(', ');
      }

      if (typeof field === 'object') {
        // URL字段
        if (field.link) {
          return field.title || field.text || field.link;
        }

        // 单选字段
        if (field.name) {
          return field.name;
        }

        // 日期字段（时间戳）
        if (field.timestamp || typeof field === 'number') {
          const timestamp = field.timestamp || field;
          try {
            return new Date(timestamp).toLocaleString('zh-CN');
          } catch (e) {
            return String(timestamp);
          }
        }

        // 其他对象类型
        if (field.text) {
          return field.text;
        }

        // 最后尝试JSON序列化
        try {
          return JSON.stringify(field);
        } catch (e) {
          return String(field);
        }
      }

      return String(field);
    }

    try {
      debugLog({
        '===1 开始处理字段拼接': {
          fieldsCount: fields.length,
          separatorType,
          customSeparator,
          betweenText,
          totalPrefixText,
          totalSuffixText,
          fieldPrefixes,
          totalHeaderLevel,
          fieldHeaderLevel,
          fieldsDetail: fields
        }
      });

      if (!fields || fields.length === 0) {
        return {
          code: FieldCode.Error,
        }
      }

      // 解析每个字段的前缀
      const prefixArray = fieldPrefixes ? fieldPrefixes.split('|') : [];

      debugLog({
        '===1.5 解析字段前缀': { prefixArray }
      });

      // 确定基础分隔符
      let baseSeparator = '\n'; // 默认换行
      if (separatorType && separatorType.value) {
        switch (separatorType.value) {
          case 'newline':
            baseSeparator = '\n';
            break;
          case 'comma':
            baseSeparator = ',';
            break;
          case 'space':
            baseSeparator = ' ';
            break;
          case 'semicolon':
            baseSeparator = ';';
            break;
          case 'pipe':
            baseSeparator = '|';
            break;
          case 'custom':
            baseSeparator = customSeparator || '\n';
            break;
          default:
            baseSeparator = '\n';
        }
      }

      // 构建最终的连接符：字段间插入文字 + 基础分隔符
      const finalSeparator = betweenText + baseSeparator;

      debugLog({
        '===2 确定连接符': { baseSeparator, betweenText, finalSeparator }
      });

      // 获取标题前缀
      const totalMarkdownPrefix = getMarkdownPrefix(totalHeaderLevel);
      const fieldMarkdownPrefix = getMarkdownPrefix(fieldHeaderLevel);

      // 处理每个字段的值并转换为字符串
      const processedValues: string[] = [];

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const fieldValue = processFieldValue(field);

        debugLog({
          [`===3.${i} 处理字段${i}`]: {
            originalField: field,
            processedValue: fieldValue,
            isEmpty: !fieldValue.trim()
          }
        });

        // 只处理非空值
        if (fieldValue.trim()) {
          // 获取当前字段的前缀（如果有的话）
          const fieldPrefix = prefixArray[i] || '';
          let finalFieldValue = '';

          if (fieldPrefix) {
            // 如果有字段前缀，将其格式化为Markdown标题
            finalFieldValue = `${fieldMarkdownPrefix} "${fieldPrefix}"\n${fieldValue.trim()}`;
          } else {
            // 如果没有字段前缀，直接使用字段值
            finalFieldValue = fieldValue.trim();
          }

          processedValues.push(finalFieldValue);
        }
      }

      debugLog({
        '===4 处理后的值': { valuesCount: processedValues.length, processedValues }
      });

      // 如果没有有效的字段值，返回空结果
      if (processedValues.length === 0) {
        return {
          code: FieldCode.Success,
          data: '',
        }
      }

      // 拼接所有值
      let result = processedValues.join(finalSeparator);

      // 添加总前缀和总后缀（格式化为Markdown标题）
      if (totalPrefixText) {
        const formattedPrefix = `${totalMarkdownPrefix} ${totalPrefixText}\n\n`;
        result = formattedPrefix + result;
      }
      if (totalSuffixText) {
        const formattedSuffix = `\n\n${totalMarkdownPrefix} ${totalSuffixText}`;
        result = result + formattedSuffix;
      }

      debugLog({
        '===5 拼接完成': { resultLength: result.length, finalResult: result }
      });

      // 检查结果长度，支持大量字符但给出警告
      if (result.length > 100000) {
        debugLog({
          '===6 警告': '结果超过10万字符，可能影响性能'
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