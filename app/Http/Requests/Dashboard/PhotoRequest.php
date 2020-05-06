<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class PhotoRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'photo.*' => 'image|mimes:jpeg,bmp,png,giff,tiff|max:16000|dimensions:max_width=3024,max_height=4032'
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'Поле обязательно к заполнению',
            'image' => 'Загружаемый файл не является картинкой',
            'mimes' => 'Не соответствует формат загружаемых фото. Рекомендуемые форматы - BMP; GIF; JPG; PNG; TIFF',
            'max' => 'Максимальный размер загружаемого фото 16 МБ',
            'dimensions' => "Максимальное разрешение фото 3024x4032",
            'uploaded' => "Ошибка загрузки фото"
        ];
    }
}
