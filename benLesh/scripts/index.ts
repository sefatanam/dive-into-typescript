
console.clear();
console.log('Handy RxJs');

interface Observer<T> {
    next(value: T): void;
    error(err: any): void;
    complete(): void;
}

function myObserver(observer: Observer<number>) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
}

myObserver({
    next(value) { console.log(value); },
    error(err) { console.error(err); },
    complete() { console.log('Complete'); },
})