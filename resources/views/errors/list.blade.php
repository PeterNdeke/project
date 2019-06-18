@if($errors->any())
    <ul class="alert alert-danger" style="list-style: none;">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        @foreach($errors->all() as $error)
            <li><i class="fa fa-exclamation-circle"> </i> {{ $error }}</li>
        @endforeach
    </ul>
@endif