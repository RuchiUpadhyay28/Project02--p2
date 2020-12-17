var userName="";
var userSCore=0;
$('.submit').click(function(){
    userName=$('#userName').val();
    document.getElementById('name').innerHTML=userName;
    $('.msg').removeClass('d-none');
    $('.welcomeMsg').addClass('d-none');
    $('.quiz').removeClass('d-none');
    $('.btn-success').prop('disabled',true);
})

$('input[name="answerOne"]').on('change',function(){
    $('#One').prop('disabled',false);
    var answer=$('input[name="answerOne"]:checked').val();
    $('#One').click(function(){
        if(answer=='bbb'){
            userSCore+=1;
            $('.correctAnsOne').removeClass('d-none');
        }
        else{
            $('.wrongAnsOne').removeClass('d-none');
        }
        $('#One').prop('disabled',true);
        $('input[name="answerOne"]').each(function(){
            $(this).attr('disabled',true);
        })
    })
});

$('input[name="answerTwo"]').on('change',function(){
    $('#Two').prop('disabled',false);
    var answer=$('input[name="answerTwo"]:checked').val();
    $('#Two').click(function(){
        if(answer=='rfg'){
            userSCore+=1;
            $('.correctAnsTwo').removeClass('d-none');
        }
        else{
            $('.wrongAnsTwo').removeClass('d-none');
        }
        $('#Two').prop('disabled',true);
        $('input[name="answerTwo"]').each(function(){
            $(this).attr('disabled',true);
        })
    })
});

$('input[name="answerThree"]').on('change',function(){
    $('#Three').prop('disabled',false);
    var answer=$('input[name="answerThree"]:checked').val();
    $('#Three').click(function(){
        if(answer=='rnbdj'){
            userSCore+=1;
            $('.correctAnsThree').removeClass('d-none');
        }
        else{
            $('.wrongAnsThree').removeClass('d-none');
        }
        $('#Three').prop('disabled',true);
        $('input[name="answerThree"]').each(function(){
            $(this).attr('disabled',true);
        })
    })
});

$('input[name="answerFour"]').on('change',function(){
    $('#Four').prop('disabled',false);
    var answer=$('input[name="answerFour"]:checked').val();
    $('#Four').click(function(){
        if(answer=='phk'){
            userSCore+=1;
            $('.correctAnsFour').removeClass('d-none');
        }
        else{
            $('.wrongAnsFour').removeClass('d-none');
        }
        $('#Four').prop('disabled',true);
        $('input[name="answerFour"]').each(function(){
            $(this).attr('disabled',true);
        })
    })
});

$('input[name="answerFive"]').on('change',function(){
    $('#Five').prop('disabled',false);
    var answer=$('input[name="answerFive"]:checked').val();
    $('#Five').click(function(){
        if(answer=='knph'){
            userSCore+=1;
            $('.correctAnsFive').removeClass('d-none');
        }
        else{
            $('.wrongAnsFive').removeClass('d-none');
        }
        $('#Five').prop('disabled',true);
        $('input[name="answerFive"]').each(function(){
            $(this).attr('disabled',true);
        })
    })
});

$('.result').click(function(){
    $('.welcomeMsg').addClass('d-none');
    $('.quiz').addClass('d-none');
    $('.msg').addClass('d-none');
    $('.result-container').removeClass('d-none');
    document.getElementById('score').innerHTML=userSCore;
})
