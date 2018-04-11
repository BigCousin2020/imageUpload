function getBase64(input, fn) {
	if(typeof(FileReader) === 'undefined') {
		$.hint("warn","抱歉，你的浏览器不支持 FileReader，请更换浏览器再进行操作！");
		input.setAttribute('disabled', 'disabled');
	} else {
		input.addEventListener('change', function() {
			var file = input.files[0];
			if(!/image\/\w+/.test(file.type)) {
				$.hint("warn","请确保文件为图像类型");
				return false;
			}
			if(file.size > 1020 * 1020 * 4) {
				$.hint("warn","照片过大 请重新选择照片");
				return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e) {
				fn(file, this.result);
			}
		}, false)
	}
};
/*
 * 使用方法
 * 
 * input  传入一个js的 input对象 如果使用jq 将jq对象转换为js对象
 * fn	  传入获取到文件后的回调 回调中会传入两个参数 第一个为file 第二个为base64
 * 
 * 此方法会在传入的input的change触发时执行
 * 
 */*/