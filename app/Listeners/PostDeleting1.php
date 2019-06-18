<?php

namespace App\Listeners;

use App\Events\PostDeleting as PostDeletingEvent;

class PostDeleting
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
     * @param  object  $event
     * @return void
     */
    public function handle(PostDeletingEvent $event)
    {
        $event->like()->delete();
        $event->comments()->delete();
    }
}
