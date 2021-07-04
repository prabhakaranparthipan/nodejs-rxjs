import { Observable } from 'rxjs';

const observable = new Observable(subscribe => {
    subscribe.next(2);
    subscribe.next(3);
    setTimeout(() => subscribe.next(10), 1000);
    subscribe.next(5);
});

console.log("Observable execution started");

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

console.log("Observable execution completed");


// print
// Observable execution started
// next method invoked
// 2
// next method invoked
// 3
// next method invoked
// 5
// Observable execution completed
// next method invoked
// 10
