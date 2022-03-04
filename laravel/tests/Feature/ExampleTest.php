<?php

namespace Tests\Feature;

use App\Models\Task;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * @test
     */
    public function 一覧を取得()
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response->assertOk()
        ->assertJsonCount($tasks->count());
    }

    /**
     * @test
     */
    public function 登録することができる()
    {
        $data = [
            'title' =>'テスト'
        ];

        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertCreated()
            ->assertJsonFragment($data)
        ;
    }

    /**
     * @test
     */
    public function 更新することができる()
    {
        $task = Task::factory()->create();

        $task->title = '書き換え';

        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        $response
            ->assertOk()
            ->assertJsonFragment($task->toArray())
        ;
    }

    /**
     * @test
     */
    public function 削除することができる()
    {
        $task = Task::factory()->count(10)->create();

        $response = $this->deleteJson("api/tasks/1");
        $response->assertOk();

        $response = $this->getJson("api/tasks");

        $response->assertJsonCount($task->count() -1);
    }
}
