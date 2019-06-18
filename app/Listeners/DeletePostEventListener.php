<?php

namespace App\Listeners;

use App\Events\DeletePostEvent;

class DeletePostEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  DeletePostEvent  $event
     * @return void
     */
    public function handle(DeletePostEvent $event)
    {
        // $event->like()->delete();
        // $event->comments()->delete();
        //
    }
}
