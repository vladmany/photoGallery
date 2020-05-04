<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

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
            'photo' => 'required|mimes:bmp,gif,png,tiff,jpg|max:16|dimensions:max_width=3024,max_height=4032',
//            'name' => 'required',
//            'width' => 'required|max:3024',
//            'height' => 'required|max:4032',
//            'url' => 'required',
//            'size' => 'required|max:16000',
//            'extension' => 'required',
//            'path' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'Поле обязательно к заполнению',
            'mimes' => 'Загружаемое фото должно иметь один из следующих типов bmp,gif,png,tiff,jpg',
            'photo.max' => 'Максимальный размер загружаемого фото :max МБ',
            'photo.dimensions' => "Максимальное разрешение фото 3024x4032"
        ];
    }
}
