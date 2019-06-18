@if(Session::has('flash_message'))
    <div class="row">
        <div class="col-sm-12">
            <div class="alert alert-success {{ Session::has('flash_message_important') ? 'alert-important' : '' }}" >
                @if(Session::has('flash_message_important'))
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                @endif

                {{ session('flash_message') }}
            </div>
        </div>
    </div>

@elseif(Session::has('flash_error'))
    <div class="row">
        <div class="col-sm-12">
            <div class="alert alert-danger alert-important" >

                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

                {{ session('flash_error') }}
            </div>
        </div>

    </div>
@endif