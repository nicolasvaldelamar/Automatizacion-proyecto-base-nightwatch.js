
# Proyecto base usando Nightwatchjs + POM + cucumberJS + Allure + Generacion de reportes en PDF y WORD

Este es un proyecto base que utiliza Nightwatchjs como framework base integrado con cucumber para el lenguaje gherkins y allure report para el manejo de reportes y evidencias, permite ademas la utilizacion de datos de prueba apartir de archivos excel y/o base de datos y la generacion de reportes en PDF Y WORD.

## Instalacion

```
PRIMERO INSTALAR python 3.11
```
```
INSTALAR PIP
```
```
entrar carpeta allure_docx
```
```
pip install -r .\requirements.txt
```
```
pip install pyinstaller
```
```
build_exe.cmd #para Windows
```
```
python .\allure-docx\src\allure_docx\commandline.py --help
```


## Para generar el informe allure revisar los comandos en el package.json


## Para el uso de datos a partir de un excel crear:
```
carpeta "data/" <- dentro colocar los excel con los datos de prueba
```


## Como usarlo

primeramente debes instalar las dependencias

```bash
  npm install
```

luego puedes ejecutar las pruebas

```bash
  npm run test
```

el page object model se encuentran en la carpeta

```bash
  page-objects/
```

los archivos features y steps definitions estan en la carpeta

```bash
  test/features/
```

los archivos de reporte de salida para que se genere el allure se encuentran en esta carpeta

```bash
  tests_output/
```

para generar el reporte usa el comando

```bash
  npm run allure-generate
```

para abrir el reporte usa

```bash
  npm run allure-generate
```
