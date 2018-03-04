<?php
include_once('functions.php');
include_once("config.php");
include_once('index_header.php');
include_once('candidate_details.php');
check_session();
get_details_from_candidate();
?>

<div class="container-fluid well" id="inbox_show">
<div class="row" align="center">
	<div class="col-lg-offset-2 col-lg-8">
		<div id="success" class="alert alert-success hide"></div>
			<div class="header brij" id="<?php echo $login_id; ?>">
				<h1>Inbox</h1><button class="btn btn-primary"  id="chat_refresh"><span class="glyphicon glyphicon-refresh"></span></button>
			</div>
			<div id="chatOutput" style="margin:10px;"></div>
	</div>
	<div class="col-lg-2">
		<button class="btn btn-primary"  id="message_all_delete">Clear all <span class="glyphicon glyphicon-trash"></span></button>
	</div>
</div>
</div>
<script src="js/inbox.js"></script>
<script>
	
var delete_mes=function(pid)
	{
			$.ajax({
				type: 'POST', 
				url: 'candidate_reload_mess.py',
				data: 'de_id='+pid,
				success  : function (data)
				{
					$("#success").html('Message deleted.').removeClass("hide").show().fadeOut("slow");
				}
			});
	}
</script>
</body>
</html>