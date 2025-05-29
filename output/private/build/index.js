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
    ],
    // 定义捷径的返回结果类型为多行文本
    resultType: {
        type: block_basekit_server_api_1.FieldType.Text,
    },
    // formItemParams 为运行时传入的字段参数,对应字段配置里的 formItems
    execute: async (formItemParams, context) => {
        const { fields = [], separatorType, customSeparator = '' } = formItemParams;
        /** 为方便查看日志,使用此方法替代console.log */
        function debugLog(arg) {
            // @ts-ignore
            console.log(JSON.stringify({
                formItemParams,
                context,
                arg
            }));
        }
        try {
            debugLog({
                '===1 开始处理字段拼接': { fieldsCount: fields.length, separatorType, customSeparator }
            });
            if (!fields || fields.length === 0) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Error,
                };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixnQkFBZ0I7SUFDaEIsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxVQUFVO2dCQUN6QixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixzQkFBc0IsRUFBRSxlQUFlO2dCQUN2QyxhQUFhLEVBQUUsTUFBTTtnQkFDckIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSw4QkFBOEI7Z0JBQzdDLGdCQUFnQixFQUFFLFdBQVc7Z0JBQzdCLHNCQUFzQixFQUFFLDBDQUEwQztnQkFDbEUsYUFBYSxFQUFFLHFCQUFxQjtnQkFDcEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0Y7S0FDRjtJQUNELFVBQVU7SUFDVixTQUFTLEVBQUU7UUFDVDtZQUNFLEdBQUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdkIsU0FBUyxFQUFFLHlDQUFjLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPO2dCQUN6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