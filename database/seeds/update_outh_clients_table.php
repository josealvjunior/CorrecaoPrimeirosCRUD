<?php

use Illuminate\Database\Seeder;

class update_outh_clients_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            'id' => 'appid01',
            'secret' => 'secret',
            'name' => 'Minha App',
        ]);
    }
}
