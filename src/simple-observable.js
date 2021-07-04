import { Observable } from 'rxjs';

const observable = new Observable(subscribe => {
    subscribe.next(2);
    subscribe.next(3);
    subscribe.complete(4);

    // The below notification will not trigger in subscription since complete method is called.
    subscribe.next(5);
    subscribe.error(5);
});

observable.subscribe({
    next: value => {
        console.log('next method invoked')
        console.log(value);
    },
    error: message => {
        console.log('error method invoked')
        console.log(message);
    },
    complete: () => {
        console.log('complete method invoked')
    }
});

// prints

// next method invoked
// 2
// next method invoked
// 3
// complete method invoked