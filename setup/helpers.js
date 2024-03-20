let fs = require('fs');
let path = require('path');
module.exports = {
    leerDirectorioSinArchivosOcultos: function (rutaDirectorio) {
        // Lee todos los archivos en el directorio de manera síncrona
        const archivos = fs.readdirSync(rutaDirectorio);
        // Filtra la lista para excluir archivos ocultos
        const archivosNoOcultos = archivos.filter(nombreArchivo => !nombreArchivo.startsWith('.') && !nombreArchivo.startsWith('~$'));
        return archivosNoOcultos;
    },

    listFilesInDirectory: function (directoryPath) {
        const files = fs.readdirSync(directoryPath);
        const features = [];

        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // If it's a directory, recursively list its contents
                const subdirectoryFeatures = this.listFilesInDirectory(filePath);
                features.push(...subdirectoryFeatures);
            } else {
                if (file.endsWith('.feature')) {
                    // If it's a file with a .feature extension, add it to the features array
                    features.push(filePath);
                }
            }
        });

        return features;
    }
}