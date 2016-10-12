var cardPluginAPI = function() {
};
cardPluginAPI.prototype.startActivity = function(success, error, testData1) {
    return PhoneGap.exec(success, error, 'CardPlugin', // java类名，plugins.xml中注册的名字
    'startActivity', // action，Java方法中用来匹配的字段
    [ testData1 ] // params 传递的参数，Array形式
    );
};
PhoneGap.addConstructor(function() {
    // 如果不支持window.plugins,则创建并设置
    PhoneGap.addPlugin('cardPluginAPI', new cardPluginAPI());
});