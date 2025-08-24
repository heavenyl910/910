export const ffmpegArgs = (url:string) => ['-re','-i',url,'-f','s16le','-'];
