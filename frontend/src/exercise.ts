export interface Exercise {
    id: number;
    name: string;
    description: string;
}
export interface ApiExercises{
    count: number;
    next : string;
    previous: string;
    results : Exercise[]
}

export interface ApiExercisesCategory{
    count: number;
    next : string;
    previous: string;
    results : ExerciseCategory[];
}


export interface ApiExercisesDetails{
    id: number;
    name: string;
    exercise_base_id: number;
    description: string;
    category: ExerciseCategory;
    muscles: ExerciseMuscles[];
    muscles_secondary: ExerciseMuscles[];
    variations: number[];
}

export interface ExerciseCategory{
    id: number;
    name: string;

}

interface ExerciseMuscles{
    id: number;
    name: string;
    image_url_main: string;
    image_url_secondary: string;
}