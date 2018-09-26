import { Observable } from 'rxjs';

const load = (url) => {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        let onload = () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        };
        xhr.addEventListener('load', onload);

        xhr.open('GET', url);
        xhr.send();

        return () => {
            xhr.removeEventListener('load', onload);
            xhr.abort();
        };
    });
}

export default load;