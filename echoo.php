 <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">


<br/><br/>
     <div class="container">   
<form class="form-inline" action="echoo.php">
  <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe" name="name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" name="email">
  </div>
    <button type="submit" class="btn btn-default">Send invitation</button>
</form>
        </div>

<div class="container">
    <ul>
        <li class="btn btn-info">You've enter the name: <?php echo ($_POST['name']); ?></li>
        <li role="separator" class="divider"></li>
        <li class="btn btn-info">You've entered <?php echo ($_POST['email']); ?> as your email address.</li>
    </ul>

</div>