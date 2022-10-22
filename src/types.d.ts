type image = {
    path: string;
    width: number;
    height: number;
};

type gallery = {
    name: string;
    year: number | string;
    subtitle: string;
    images: image[];
};