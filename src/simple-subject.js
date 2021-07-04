import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
    next: (value) => console.log(`subscriber 1 : ${value}`),
    error: (message) => console.log(`subscriber 1 : ${message}`),
    complete: () => console.log('subscriber 1 : done')
});

subject.subscribe({
    next: (value) => console.log(`subscriber 2 : ${value}`),
    error: (message) => console.log(`subscriber 2 : ${message}`),
    complete: () => console.log('subscriber 2 : done')
});

subject.next(4);

// prints
// subscriber 1 : 4
// subscriber 2 : 4