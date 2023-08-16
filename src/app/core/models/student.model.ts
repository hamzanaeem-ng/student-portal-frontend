import { FormControl } from "@angular/forms";

export interface Student {
    id?: number;
    name: string;
    age: string;
    sex: number;
}

export interface StudentForm {
    name: FormControl<string | null>;
    age: FormControl<string | null>;
    sex: FormControl<number| null>;
}

