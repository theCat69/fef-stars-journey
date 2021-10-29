import { Animal } from "./Animal";

export class Person {
    id: string = "";
    lastName: string = "";
    firstName: string = "";
    animals: Animal[] = [];
    //UUID id, String lastName, String firstName, List<AnimalDto> animals
}