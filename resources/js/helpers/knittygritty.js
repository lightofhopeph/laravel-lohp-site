import Swal from 'sweetalert2';

export const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const silencedHtml = (html, n) => {
    return html
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/&nbsp;/g, ' ')
        .substr(0, n);
};

export const img2Base64 = inputFile => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onerror = () => {
            reject(new DOMException('Problem parsing input file.'));
        };
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(inputFile);
    });
};

const swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
});

export {swal, toast};
