export function* idGenerator(id = 1){
    while(id > 0){
        yield id++
    }
}