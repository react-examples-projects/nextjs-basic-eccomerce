import { toast } from "react-toastify";
/**
 * It verify if the `sizeImage` is larger than the allow value
 * @param {Number} sizeImage The file size
 * @returns If `sizeImage` is allowed
 */
export function isFileTooLarge(sizeImage) {
  const SIZE_ALLOWED = 3; // Mb
  const size = (sizeImage / (1024 * 1024)).toFixed(2);
  return size > SIZE_ALLOWED;
}

/**
 * It verify if the `mimeType` is a valid image MimeType
 * @param {String} mimeType The MimeType
 * @returns If `MimeType` is a valid image MimeType
 */
export function isNotValidFileType(mimeType) {
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/webp",
    "image/png",
  ];
  return !SUPPORTED_FORMATS.includes(mimeType);
}

/**
 * It verify if the files are valid images
 * @param {FileList} files The images
 * @returns A promise if the files are valids
 */
export function isValidFile(files) {
  return new Promise((resolve, reject) => {
    let isValid = true,
      i = 0,
      len = files.length;

    while (i < len && isValid) {
      if (isFileTooLarge(files[i].size)) {
        toast.error(
          `La imágen "${files[i].name}" es muy pesada, debe ser menor a 3mb`
        );
        reject(
          `La imágen "${files[i].name}" es muy pesada, debe ser menor a 3mb`
        );
        isValid = false;
      } else if (isNotValidFileType(files[i].type)) {
        toast.error(`El archivo "${files[i].name}" no es una imágen`);
        reject(`El archivo "${files[i].name}" no es una imágen`);
        isValid = false;
      }
      i++;
    }
    resolve(files);
  });
}
