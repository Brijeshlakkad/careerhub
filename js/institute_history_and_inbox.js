$(document).ready(function () {
		var $chatOutput = $("#chatOutput");
		var $chatRefresh = $("#chat_refresh");
		var $mesDeleteAll= $("#message_all_delete");
		var $messTotalShow=$("#mess_show_total");
		var delete_all_mes=function(){
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'delete_all_mess='+parid,
				success  : function (data)
				{
					if(data==1)
						{
					$(document).ajaxStop(function(){
						$("#mess_success").html('All data is cleared.').removeClass("hide").show().fadeOut("slow");
					});
						}
				},
			
				});
		};
		var retrieveMessages=function() {
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'mess_reload='+parid,
				success  : function (data)
				{
					$chatOutput.html(data);
					mess_total_cal();
				}
				});
		};
		var mess_total_cal =function(){
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'mess_total='+parid,
				success  : function (data)
				{
					$messTotalShow.html(data);
				}
				});
		};
		mess_total_cal();
		retrieveMessages();
		$chatRefresh.click(function () {
			retrieveMessages();
		});	
		$mesDeleteAll.click(function(){
			var r = confirm("Are you sure?");
			if (r == true) {
				delete_all_mes();
				mess_total_cal();
				r=false;
			} else {
				
			}
			
		});
		var $historyOutput = $("#historyOutput");
		var $historyRefresh = $("#history_refresh");
		var $historyDeleteAll= $("#history_all_delete");
		var $histTotalShow=$("#hist_show_total");
		var delete_all_hist=function(){
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'delete_all_hist='+parid,
				success  : function (data)
				{

					if(data==1)
						{
					$(document).ajaxStop(function(){
						$("#hist_success").html('All data is cleared.').removeClass("hide").show().fadeOut(1000);
						});
						}
				}
				});
		};
		var retrieveHistory=function() {
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'hist_reload='+parid,
				success  : function (data)
				{
					$historyOutput.html(data);
					hist_total_cal();
				}
				});
		};
		var hist_total_cal =function(){
			var parid=$("div.brij").attr('id');
			$.ajax({
				type: 'POST', 
				url: 'institute_interface.py',
				data: 'hist_total='+parid,
				success  : function (data)
				{
					$histTotalShow.html(data);
				}
				});
		};
		hist_total_cal();
		$historyDeleteAll.click(function(){
			var r = confirm("Are youd sure?");
			if (r == true) {
				delete_all_hist();
				hist_total_cal();
				r=false;
			} else {
				
			}
			
		});
		retrieveHistory();
		$historyRefresh.click(function () {
			retrieveHistory();
		});
	
});