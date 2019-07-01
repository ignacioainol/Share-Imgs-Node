$('#btn-like').on('click',function(e){
    let imgId = $(this).data('id');

    $.post('/images/' + imgId + '/like')
        .done(data =>{
            console.log(data);
            $('.likes-count').text(data.likes);
        });

    return false;
});

$('#btn-delete').on('click',function(e){
    let $this = $(this);
    const response = confirm("Are u sure you want to telete this image?");
    if(response){
        let imgId = $this.data('id');
        $.ajax({
            url: '/images/' + imgId, 
            type:'DELETE',

        }).done(function(result){
            $this.removeClass('btn-danger').addClass('btn-success');
            $this.find('i').removeClass('fa-times').addClass('fa-check');
            $this.append('<span> Deleted!</span>');
        });
    }
    return false;
});