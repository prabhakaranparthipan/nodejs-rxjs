import { interval, Observable } from 'rxjs';

const observable = interval(1000);

const subscription = observable.subscribe({
    next: value => {
        console.log("Message from next");
        console.log(value);
    },
    error: message => {
        console.log('Message from error')
        console.log(message);
    },
    complete: () => {
        console.log('done')
    }
});

// Observable unsubscribed after 5 seconds
setTimeout(() => subscription.unsubscribe(), 5000);

// prints

// Message from next
// 0
// Message from next
// 1
// Message from next
// 2
// Message from next
// 3