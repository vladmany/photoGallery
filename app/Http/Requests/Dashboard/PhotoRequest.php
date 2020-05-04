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
            'photo' => 'required|mimes:bmp,gif,png,tiff,jpg',
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
            'required' => ':attribute поле обязательно к заполнению.',
            'mimes' => 'Загружаемое фото должно иметь один из следующих типов bmp,gif,png,tiff,jpg.',
        ];
    }
}
