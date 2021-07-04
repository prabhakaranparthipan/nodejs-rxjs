import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(2);

subject.subscribe({
    next: (value) => console.log(`subscriber 1 : ${value}`),
    error: (message) => console.log(`subscriber 1 : ${message}`),
    complete: () => console.log('subscriber 1 : done')
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe({
    next: (value) => console.log(`subscriber 2 : ${value}`),
    error: (message) => console.log(`subscriber 2 : ${message}`),
    complete: () => console.log('subscriber 2 : done')
});

subject.subscribe({
    next: (value) => console.log(`subscriber 3 : ${value}`),
    error: (message) => console.log(`subscriber 3 : ${message}`),
    complete: () => console.log('subscriber 3 : done')
});

subject.subscribe({
    next: (value) => console.log(`subscriber 4 : ${value}`),
    error: (message) => console.log(`subscriber 4 : ${message}`),
    complete: () => console.log('subscriber 4 : done')
});


// prints
// subscriber 1 : 1
// subscriber 1 : 2
// subscriber 1 : 3
// subscriber 2 : 2
// subscriber 2 : 3
// subscriber 3 : 2
// subscriber 3 : 3
// subscriber 4 : 2
// subscriber 4 : 3