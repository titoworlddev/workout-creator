# Principales

Arreglar que si no eliges ningun ejercicio no se pueda agregar o que te salte error para que lo agregues
Arreglar los modals para que siempre tengan los botones y titulo a la vista y se solo sea scrollable el contenido
Botones para borrar y editar ejercicios
Copiar dias
Poner el enter para aceptar el modal y agregar los dias o los ejercicios (probablemente se pueda hacer con un form y un input type=submit)
Crear un path que reciba un parametro de tipo string y que devuelva un json con los datos de los ejercicios que se encuentran en el parametro
(En principio el entrenamiento ira todo dentro de un objeto que es lo que se guardara en el localstorage y lo que se mandara a los parametros de la url y se usara para montar el entrenamiento si no hay nada)

# Secundarias

Hacer que solo se puedan poner numeros en las repeticiones y series
Quizas hacer que los dias tengan nombre pero de en que esta enfocado o algo asi que quiera poner el usuario, pero por defecto que sea el dia de la semana y que se pueda elegir si agregarlo a mas dias de la semana
(lo que para decir si se puede poner en mas dias que sea algo como en editar el dia que se pueda elegir si se quiere poner en mas dias o no, o que se pueda copiar ese dia y cuando le das a crear otro dia eliges en que dia agregarlo y pegas el dia que ya tenias creado o que cuando le des a copiar dia te deje elegir en que dia o dias agregarlo y se copia en un dia que hay ya algo, este se reemplaza por el dia que se acaba de copiar)

### Opcionales

El path final deberia quedar algo asi:
https://workout-creator/creator?days=Lunes:%20exercises=003%20007%20245%20876%20453%20931%20%201234%20Martes:%20exercises=003%20007%20245%20876%20453%20931%20%201234
que en principio despues se usara un acortador de url para que quede algo mas corto
aunque es posible que vaya dentro de un objeto y quede asi:
https://workout-creator/creator?days={Lunes:%20exercises=[003,007,245,876,453,931,1234],Martes:%20exercises=[003,007,245,876,453,931,1234]}
(aqui los exercises son una lista de ids que se usaran para buscar los ejercicios en json y montar el entrenamiento)
