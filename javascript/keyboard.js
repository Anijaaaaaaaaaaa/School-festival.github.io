$(function(){
  switch_lowercase();
});

function put_string(chr){
  $("#textfield").shizukey('put_string', {chr: chr});
};

function put_point(type){
  $("#textfield").shizukey('put_point', {type: type});
};

function delete_string(){
  $("#textfield").shizukey('delete_string');
};

function delete_all(){
  $("#textfield").shizukey('delete_all');
};

function move_position(agl){
  $("#textfield").shizukey('move_position', {agl: agl});
};

function switch_lowercase(){
  $("#uppercase").hide();
  $("#japanese").hide();
  $("#lowercase").show();
};

function switch_uppercase(){
  $("#lowercase").hide();
  $("#japanese").hide();
  $("#uppercase").show();
};
