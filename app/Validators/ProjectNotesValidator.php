<?php
/**
 * Created by PhpStorm.
 * User: josej_000
 * Date: 27/07/2015
 * Time: 22:02
 */

namespace project\Validators;


use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\LaravelValidator;

class ProjectNotesValidator extends LaravelValidator
{
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'title' => 'required',
            'notes' => 'required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'title' => 'required',
            'notes' => 'required'
        ]
    ];
}