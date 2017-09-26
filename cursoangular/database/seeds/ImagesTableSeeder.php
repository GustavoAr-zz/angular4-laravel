<?php

use Illuminate\Database\Seeder;
use App\Image;
use Faker\Factory as Faker;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(0, 7) as $number) {
            $color1 = substr($faker->hexcolor(), 1);
            $color2 = substr($faker->hexcolor(), 1);
            Image::create([
                'title'       => $content = $faker->text(80),
                'description' => $faker->paragraph(5),
                'thumbnail'   => 'http://via.placeholder.com/300x200/' . $color1 . '/' . $color2 . '/?text=thumbnail',
                'imageLink'   => 'http://via.placeholder.com/600x400/' . $color1 . '/' . $color2 . '/?text=imageLink',
                'user_id'     => $faker->numberBetween($min = 1, $max = 5),
            ]);
        }
    }
}
