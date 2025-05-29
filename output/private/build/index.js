"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的i18n语言资源
    i18n: {
        messages: {
            'zh-CN': {
                'fieldsLabel': '选择要拼接的字段',
                'separatorLabel': '字段间连接符',
                'separatorPlaceholder': '输入字段间的连接符,留空则默认换行',
                'totalPrefixLabel': '总前缀',
                'totalPrefixPlaceholder': '在拼接结果前添加的标题文字（可选）',
                'totalSuffixLabel': '总后缀',
                'totalSuffixPlaceholder': '在拼接结果后添加的标题文字（可选）',
                'totalHeaderLevelLabel': '总前缀/后缀标题等级',
                'betweenTextLabel': '字段间插入文字',
                'betweenTextPlaceholder': '在每两个字段值之间插入的文字（可选）',
                'fieldPrefixesLabel': '每个字段的前缀',
                'fieldPrefixesPlaceholder': '为每个字段添加前缀,用|分隔,如：姓名|年龄|部门',
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
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                mode: 'multiple', // 支持多选
                supportType: [
                    block_basekit_server_api_1.FieldType.Text,
                    block_basekit_server_api_1.FieldType.Number,
                    block_basekit_server_api_1.FieldType.SingleSelect,
                    block_basekit_server_api_1.FieldType.MultiSelect,
                    block_basekit_server_api_1.FieldType.Url,
                    block_basekit_server_api_1.FieldType.DateTime,
                ],
            },
            validator: {
                required: true,
            }
        },
        {
            key: 'totalHeaderLevel',
            label: t('totalHeaderLevelLabel'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
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
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('totalPrefixPlaceholder'),
            },
        },
        {
            key: 'totalSuffixText',
            label: t('totalSuffixLabel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('totalSuffixPlaceholder'),
            },
        },
        {
            key: 'fieldHeaderLevel',
            label: t('fieldHeaderLevelLabel'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
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
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('fieldPrefixesPlaceholder'),
            },
            tooltips: [
                {
                    type: 'text',
                    content: '为每个字段添加前缀文字,按字段选择顺序用"|"分隔.例如：第一个字段前缀|第二个字段前缀|第三个字段前缀'
                },
                {
                    type: 'text',
                    content: '如果某个字段不需要前缀,可以留空,如：姓名||部门（中间的年龄字段无前缀）'
                }
            ],
        },
        {
            key: 'separatorType',
            label: t('separatorLabel'),
            component: block_basekit_server_api_1.FieldComponent.Radio,
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
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('separatorPlaceholder'),
            },
        },
        {
            key: 'betweenText',
            label: t('betweenTextLabel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('betweenTextPlaceholder'),
            },
            tooltips: [
                {
                    type: 'text',
                    content: '在每两个字段值之间插入的文字,会与连接符一起使用'
                }
            ],
        },
    ],
    // 定义捷径的返回结果类型为多行文本
    resultType: {
        type: block_basekit_server_api_1.FieldType.Text,
    },
    // formItemParams 为运行时传入的字段参数,对应字段配置里的 formItems
    execute: async (formItemParams, context) => {
        const { fields = [], separatorType, customSeparator = '', betweenText = '', totalPrefixText = '', totalSuffixText = '', fieldPrefixes = '', totalHeaderLevel, fieldHeaderLevel } = formItemParams;
        /** 为方便查看日志,使用此方法替代console.log */
        function debugLog(arg) {
            // @ts-ignore
            console.log(JSON.stringify({
                formItemParams,
                context,
                arg
            }));
        }
        // 获取Markdown标题前缀的函数
        function getMarkdownPrefix(headerLevel) {
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
                    fieldHeaderLevel
                }
            });
            if (!fields || fields.length === 0) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Error,
                };
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
            const processedValues = [];
            for (let i = 0; i < fields.length; i++) {
                const field = fields[i];
                let fieldValue = '';
                if (field === null || field === undefined) {
                    fieldValue = '';
                }
                else if (typeof field === 'string') {
                    fieldValue = field;
                }
                else if (typeof field === 'number') {
                    fieldValue = field.toString();
                }
                else if (typeof field === 'boolean') {
                    fieldValue = field ? 'true' : 'false';
                }
                else if (Array.isArray(field)) {
                    // 处理数组类型（如文本字段的富文本、多选字段等）
                    if (field.length > 0) {
                        if (typeof field[0] === 'string') {
                            // 多选字段
                            fieldValue = field.join(', ');
                        }
                        else if (field[0] && typeof field[0] === 'object') {
                            // 文本字段的富文本格式
                            fieldValue = field.map(item => {
                                if (item.type === 'text') {
                                    return item.text || '';
                                }
                                else if (item.type === 'url') {
                                    return item.text || item.link || '';
                                }
                                else if (item.type === 'mention') {
                                    return item.text || item.name || '';
                                }
                                else {
                                    return item.text || item.toString();
                                }
                            }).join('');
                        }
                        else {
                            fieldValue = field.join(', ');
                        }
                    }
                }
                else if (typeof field === 'object') {
                    // 处理对象类型
                    if (field.link && field.title) {
                        // URL字段
                        fieldValue = field.title || field.link;
                    }
                    else if (field.text) {
                        fieldValue = field.text;
                    }
                    else if (field.name) {
                        fieldValue = field.name;
                    }
                    else {
                        // 尝试获取对象的字符串表示
                        fieldValue = JSON.stringify(field);
                    }
                }
                else {
                    fieldValue = field.toString();
                }
                // 只处理非空值
                if (fieldValue.trim()) {
                    // 获取当前字段的前缀（如果有的话）
                    const fieldPrefix = prefixArray[i] || '';
                    let finalFieldValue = '';
                    if (fieldPrefix) {
                        // 如果有字段前缀,将其格式化为Markdown标题,只在标题后加一个换行符
                        finalFieldValue = `${fieldMarkdownPrefix} "${fieldPrefix}"\n${fieldValue.trim()}`;
                    }
                    else {
                        // 如果没有字段前缀,直接使用字段值
                        finalFieldValue = fieldValue.trim();
                    }
                    processedValues.push(finalFieldValue);
                }
            }
            debugLog({
                '===3 处理后的值': { valuesCount: processedValues.length, processedValues }
            });
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
                '===4 拼接完成': { resultLength: result.length }
            });
            // 检查结果长度,支持大量字符但给出警告
            if (result.length > 100000) {
                debugLog({
                    '===5 警告': '结果超过10万字符,可能影响性能'
                });
            }
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: result,
            };
        }
        catch (e) {
            console.log('====error', String(e));
            debugLog({
                '===999 异常错误': String(e)
            });
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixnQkFBZ0I7SUFDaEIsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixnQkFBZ0IsRUFBRSxRQUFRO2dCQUMxQixzQkFBc0IsRUFBRSxtQkFBbUI7Z0JBQzNDLGtCQUFrQixFQUFFLEtBQUs7Z0JBQ3pCLHdCQUF3QixFQUFFLG1CQUFtQjtnQkFDN0Msa0JBQWtCLEVBQUUsS0FBSztnQkFDekIsd0JBQXdCLEVBQUUsbUJBQW1CO2dCQUM3Qyx1QkFBdUIsRUFBRSxZQUFZO2dCQUNyQyxrQkFBa0IsRUFBRSxTQUFTO2dCQUM3Qix3QkFBd0IsRUFBRSxvQkFBb0I7Z0JBQzlDLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLDBCQUEwQixFQUFFLDJCQUEyQjtnQkFDdkQsdUJBQXVCLEVBQUUsVUFBVTtnQkFDbkMsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixNQUFNLEVBQUUsS0FBSztnQkFDYixRQUFRLEVBQUUsS0FBSztnQkFDZixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsYUFBYTthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsOEJBQThCO2dCQUM3QyxnQkFB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