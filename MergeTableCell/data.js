let data = [
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100501101',checkItem:'检查网络安全协调领导机构运行情况',    ruleId_4:'u30100501101101',checkPoint:'等级保护联络员是否参加公安网安部门组织召开的等级保护联络员会议？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100501101',checkItem:'检查网络安全协调领导机构运行情况',    ruleId_4:'u30100501101102',checkPoint:'联络员是否以书面形式向主管领导汇报公安网安部门在联络员会议上通报的内容？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502102',checkItem:'检查网络安全责任部门运行情况',        ruleId_4:'u30100501102101',checkPoint:'网络安全责任部门是否对本单位的网络安全工作下发文件或召开会议等方式进行业务指导？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502102',checkItem:'检查网络安全责任部门运行情况',        ruleId_4:'u30100501102102',checkPoint:'网络安全责任部门是否对本单位的网络安全工作听取汇报或现场检查等方式进行监督检查？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502103',checkItem:'检查网络安全工作文件执行情况',        ruleId_4:'u30100501103101',checkPoint:'网络安全责任部门是否对本单位的网络安全工作文件或方案明确网络安全工作所需要执行的内容？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502103',checkItem:'检查网络安全工作文件执行情况',        ruleId_4:'u30100501103102',checkPoint:'是否有网络安全工作文件或方案的执行情况的总结或汇报？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502104',checkItem:'检查网络安全工作会议、业务培训情况',   ruleId_4:'u30100501104101',checkPoint:'是否有组织人员培训的工作会议记录或文件？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502104',checkItem:'检查网络安全工作会议、业务培训情况',   ruleId_4:'u30100501104102',checkPoint:'受训人员的业务水平是否明显提高？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100501',checkContent:'网络安全工作的组织部署',ruleId_3:'u30100502105',checkItem:'检查主要领导对网络安全工作的重视情况', ruleId_4:'u30100501105101',checkPoint:'是否将网络安全工作的执行情况纳入到年度考核指标？' },
  { ruleId_1:'u301', checkRange: '网络安全工作基本情况', ruleId_2: 'u30100501', checkContent: '网络安全工作的组织部署', ruleId_3: 'u30100502105', checkItem: '检查主要领导对网络安全工作的重视情况', ruleId_4: 'u30100501105102', checkPoint: '开展网络安全工作的经费是否纳入年度预算？' },
  
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502101',checkItem:'检查网络安全领导机构执行情况', ruleId_4:'u30100502101101',checkPoint:'是否有网络安全工作的领导责任制？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502101',checkItem:'检查网络安全领导机构执行情况', ruleId_4:'u30100502101102',checkPoint:'对于网络安全领导是否有网络安全工作的考核指标？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502102',checkItem:'检查网络安全职能部门的执行情况', ruleId_4:'u30100502102101',checkPoint:'是否对本单位的网络安全工作发布文件或召开会议等方式进行业务指导？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502102',checkItem:'检查网络安全职能部门的执行情况', ruleId_4:'u30100502102102',checkPoint:'是否对本单位的网络安全工作听取汇报或现场检查等方式进行监督？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502103',checkItem:'检查网络安全责任追究制度执行情况', ruleId_4:'u30100502103101',checkPoint:'是否对所有的网络安全事故/事件有详细记录？' },
  { ruleId_1:'u301',checkRange:'网络安全工作基本情况',ruleId_2:'u30100502',checkContent:'网络安全责任制落实情况',ruleId_3:'u30100502103',checkItem:'检查网络安全责任追究制度执行情况', ruleId_4:'u30100502103102',checkPoint:'是否按照网络安全责任追究制度进行处理？' },

]

export default data