<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class AlbumRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:100|regex:/^[A-Za-zА-Яа-яё0-9]{3,100}$/ui'
        ];
    }
    public function messages()
    {
        return [
            'required' => 'Вы не ввели название альбома',
            'min' => 'Минимальна длина названия 3 символа',
            'max' => 'Максимальная длина названия 100 символов',
            'regex' => 'Имя альбома должно состоять только из цифр и букв'
        ];
    }
}
