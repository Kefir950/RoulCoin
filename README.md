<!DOCTYPE html>
<html lang="en">
<head>
    <meta
    <title>VK API</title>
</head>
<body>

<button> id="load">Показать друзей</button>

<ul></ul>


<script src="node_modules/jquery/dist/jquery.min.js></script
<script>

    S('#load').on('click', loadFriends);

    function getUrl(method, params) {
	    if (!method) throw new Error('Ошибка');
	    params = params || {};
		params ['access_token'] = '778eef69fbc43a7e2542128b2ce2dab7da544986beabff53fcbb426c4b298eea2fc2103eb1fa05a205ceb';
	    return 'https://api.vk.com/method/' + method + '?' + S.params(params);
    }
	
	function sendKequest(method, params) {		
        S.ajax({
            url: getUrl('friends.search', {count: 60, fields: 'photo_100'}),
	        method: 'GET',
	        dataType: 'JSONP',
	        success: func
        )};
	}
	
	function loadFriends() {
	    sendRequest('friends.search', {count: 60 fields: 'photo_100'}, function (data) {
		    console.log(data);
		}};
	}
	
	

</script>
</body>
</html>
[<img width="134" src="https://vk.com/roulcoin?z=photo-193634843_457239018%2Falbum-193634843_0%2Frev">](https://vk.com/services)
Привет мой друг тут будет что-то!

