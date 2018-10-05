export const commonMixin = {
	data() {
		return {
				user: {},
		};
	},
	created: function() {
	},
	methods: {
		failMessageOnlyOK(message) {
			this.$alert(message, '', {
			  confirmButtonText: 'OK',
			  center: true
			});
		},
		showMessage(type, message) {
			setTimeout(() => {
				this.$message({
				type: type,
				message: message
			  });
			}, 300);
		},
		messasePosition(type, title, message, position) {
			this.$notify({
				title: title,
				message: message,
				type: type,
				position: position
			});
		},
		showConfirm(message,confirmButtonText,cancelButtonText,type, cb, errcb) {
			this.$confirm(message, {
				confirmButtonText: confirmButtonText,
				cancelButtonText: cancelButtonText,
				type: type,
				center: true
			}).then(cb).catch(errcb);
		},
		useHTMLMessage(template, message, cb, errcb) {
			this.$alert(template, message, {
				dangerouslyUseHTMLString: true,
				confirmButtonText: '확인',
				cancelButtonText: '취소',
				center: true
			}).then(cb).catch(errcb);
		}
	}
}
