$('#btn-like').on('click',function(e){
    let imgId = $(this).data('id');

    $.post('/images/' + imgId + '/like')
        .done(data =>{
            console.log(data);
            $('.likes-count').text(data.likes);
        });

    return false;
});