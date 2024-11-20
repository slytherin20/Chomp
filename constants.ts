 type Images = {
    url: string;
    desc:string;
}

 let SALAD:Images ={
    url:'https://imgs.search.brave.com/2l5-oMRnbpVD4Lj_G_GllFnAgJ-saMepLc4Lr8VTNwE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU3LzAxLzE5/LzM2MF9GXzk1NzAx/MTk2MF95OWZIajAy/bzR2VUFlS1JvN2Vw/QlNiMjlCQ0FSQmxV/VS5qcGc',
    desc:'Carousel Image 1 - A bowl of salad containing brocolli, seeds and cucumber'
} 
 let BOWL:Images = {
    url:'https://imgs.search.brave.com/eiuw7GLEMwtwUwosdLr4KdCHvFG571N7zq2rgRhrvY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ3Lzc3LzI4/LzM2MF9GXzg0Nzc3/Mjg4MF8yU2J2ckxZ/eU9FQUZYZnozZmdu/dXhQbmU4SjVYbU9B/Vy5qcGc',
    desc: 'Carousel Image 2 - An Indian full course meal containing chapati, paneer curry, salad'
}
 let SANDWICH:Images={
    url: 'https://imgs.search.brave.com/XvniLf84I7VDvZ7zWySTXn4OFsbejrkKXIiWEJj1XNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDM5MDUxOC9waG90/by92ZWdhbi1zdXBl/ci1zYW5kd2ljaC1z/ZXJ2ZWQtd2l0aC1z/cHJvdXRzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz00Rlpu/T1VTN0NtbFBvbnFm/dkxtbF92YnQ2TG0z/MWtvS21LWWtSNjVC/NnN3PQ',
    desc: 'Carousel Image 3 - A two level sandwich made with whoe grain wheat bread'
}
 let CURRY:Images ={
    url: 'https://imgs.search.brave.com/PxN8RcaBX_fP1WsvdnAlIlzVfGGe5nf8hOCR6RrHCKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MTQ5MTU4Mi9waG90/by9jaGlsbGktcGFu/ZWVyLWluZGlhbi1z/bmFjay1mb29kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/TEZIaHdUOEt1dzJf/SEJfQl9yT3VjdXhI/MktXc19RZFkyZjB4/RHU0QzI0PQ',
    desc: 'Carousel Image 4 - Chilli Paneer platter'
}

export const images:Images[] = [SALAD,BOWL,SANDWICH,CURRY]