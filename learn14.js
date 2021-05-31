//setTimeout
setTimeout(() => {
    console.log('waiting')
}, 1000);

setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
            setTimeout(() => {
                console.log('0');
                setTimeout(() => {
                    console.log('Hello Aadit')
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
