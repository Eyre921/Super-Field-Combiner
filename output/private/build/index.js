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
                    block_basekit_server_api_1.FieldType.Checkbox,
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
                    content: '在每两个字段值之间插入的文字，会与连接符一起使用'
                }
            ],
        },
    ],
    // 定义捷径的返回结果类型为多行文本
    resultType: {
        type: block_basekit_server_api_1.FieldType.Text,
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems
    execute: async (formItemParams, context) => {
        const { fields = [], separatorType, customSeparator = '', betweenText = '', totalPrefixText = '', totalSuffixText = '', fieldPrefixes = '', totalHeaderLevel, fieldHeaderLevel } = formItemParams;
        /** 为方便查看日志，使用此方法替代console.log */
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
        // 改进的字段值处理函数
        function processFieldValue(field) {
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
                        }
                        else if (item.type === 'url') {
                            return item.text || item.link || '';
                        }
                        else if (item.type === 'mention') {
                            return item.text || item.name || '';
                        }
                        else {
                            return item.text || JSON.stringify(item);
                        }
                    }).join('');
                }
                // 处理多选字段或其他数组
                return field.map(item => {
                    if (typeof item === 'string') {
                        return item;
                    }
                    else if (item && typeof item === 'object') {
                        return item.name || item.text || item.label || JSON.stringify(item);
                    }
                    else {
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
                    }
                    catch (e) {
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
                }
                catch (e) {
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
                    }
                    else {
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
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: '',
                };
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