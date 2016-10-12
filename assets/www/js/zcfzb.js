function myzcfzb(){//资产负债表
window.scrollTo(0,0);//滚动条回到顶端
$("#zcfzb").html("<table class='cpTable khjbxx'>"+
                    "<tr>"+                        
                        "<th colspan='3'>资产：1128023</th>"+                  
                        "<th colspan='3'>负债：78000</th>"+ 
                    "</tr>"+
                    "<tr>"+    
                        "<td rowspan='4'>流动资产：<span>376857</span></td>"+
                        "<td>现金与银行存款：<span>10007</span></td>"+
                        "<td>" +
                            "现金：<span>7000</span><br/>" +
                            "银行存款：<span>3007</span><br/>" +
                        "</td>"+
                        "<td rowspan='4'>短期负债：<span>63000</span></td>"+
                        "<td>应付账款：<span>5000</span></td>"+
                        "<td>" +
                            "应付货款：<span>5000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+   
                        "<td>应收账款：<span>161170</span></td>"+
                        "<td>" +
                            "客户压货：<span>161170</span><br/>" +
                        "</td>"+
                        "<td>预收账款：<span>3000</span></td>"+
                        "<td>" +
                            "预收货款：<span>3000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+   
                        "<td>预付账款：<span>50000</span></td>"+
                        "<td>" +
                            "账款：<span>50000</span><br/>" +
                        "</td>"+
                        "<td>短期贷款：<span>50000</span></td>"+
                        "<td>" +
                            "贷款：<span>50000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+   
                        "<td>存货和原材料：<span>155680</span></td>"+
                        "<td>" +
                            "给厂家的货：<span>150000</span><br/>" +
                            "原材料：<span>5680</span><br/>" +
                        "</td>"+
                        "<td>社会集资：<span>5000</span></td>"+
                        "<td>" +
                            "朋友借款：<span>5000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+   
                        "<td>固定资产：<span>750000</span></td>"+
                        "<td colspan='2'>" +
                            "汽车（2009年购买）：<span>250000</span><br/>" +
                            "房产：<span>500000</span><br/>" +
                        "</td>"+
                        "<td>长期负债：<span>10000</span></td>"+
                        "<td colspan='2'>" +
                            "房产贷款：<span>10000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+   
                        "<td>其他资产：<span>1166</span></td>"+
                        "<td colspan='2'>" +
                            "预付押金：<span>1166</span><br/>" +
                        "</td>"+
                        "<td>其他负债：<span>5000</span></td>"+
                        "<td colspan='2'>" +
                            "拖欠货款：<span>5000</span><br/>" +
                        "</td>"+
                    "</tr>"+
                    "<tr>"+                        
                        "<th colspan='3'></th>"+                  
                        "<th colspan='3'>所有者权益：10000</th>"+ 
                    "</tr>"+
                    "<tr>"+                        
                        "<th colspan='2'>流动比率：12561900%</th>"+                  
                        "<th colspan='2'>负债率：10000%</th>"+                
                        "<th colspan='2'>速动比率：10000%</th>"+ 
                    "</tr>"+
                "</table>");  
}
function mysdhjy(){//审贷会决议
    window.scrollTo(0,0);//滚动条回到顶端
    $("#sdhjy").html("<table class='cpTable khjbxx'>"+//同意
                        "<tr>"+                        
                            "<th colspan='3'>审贷会决议</th>"+  
                        "</tr>"+
                        "<tr>"+    
                            "<td colspan='3'>审贷会结论：<label class='label label-success'>同意</label></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>金额：<span>10000</span></td>"+
                            "<td>期限（月）：<span>12</span></td>"+
                            "<td>利率：<span>0.345%</span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>还款方式：<span>等额本金</span></td>"+
                            "<td colspan='2'>每期还款金额：<span>8500</span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>借款人姓名：<span>王军忠</span></td>"+
                            "<td colspan='2'>借款人身份证号码：<span>3201546589978564994</span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>共同借款人：<span>同意</span></td>"+
                            "<td>抵质押：<span>同意</span></td>"+
                            "<td>保证：<span>同意</span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td colspan='3'>其他决议内容：<span></span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td colspan='3'>有条件通过：<span></span></td>"+
                        "</tr>"+
                    "</table>"+
                    "<table class='cpTable khjbxx'>"+//拒绝
                        "<tr>"+                        
                            "<th>审贷会决议</th>"+  
                        "</tr>"+
                        "<tr>"+    
                            "<td>审贷会结论：<label class='label label-important'>拒绝</label></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>有条件通过：<span></span></td>"+
                        "</tr>"+
                        "<tr>"+    
                            "<td>主要拒绝原因：<span></span></td>"+
                        "</tr>"+
                    "</table>");  
    }
