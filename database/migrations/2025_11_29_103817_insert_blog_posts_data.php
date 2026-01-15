<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        User::firstOrCreate(
            ['email' => 'psalazardev@gmail.com'],
            [
                'name' => 'Patricio Salazar',
                'password' => Hash::make('Roseen192125$'),
                'email_verified_at' => now(),
            ]
        );

        DB::table('posts')->whereIn('id', [5, 6, 13, 14])->delete(); // Delete previously seeded data

        $posts = [
            [
                'id' => 1,
                'user_id' => 1,
                'created_at' => '2024-09-27 19:41:12',
                'updated_at' => '2024-09-27 19:41:12',
                'published_at' => '2024-09-27 19:41:12',
                'title' => 'How I Added CSV Importing In My React-Node.js Project',
                'subtitle' => null,
                'preview_text' => 'Learn how to add CSV import functionality to a React/Node.js app using Papa Parse, S3, and PostgreSQL with bulk insert optimization.',
                'slug' => 'how-i-added-csv-importing-in-my-react-project',
                'status' => 'published',
                'is_freelance' => false,
                'is_web_development' => true,
                'is_tech' => false,
                'is_life' => false,
                'is_entrepreneurship' => false,
                'is_side_project' => false,
                'is_product_review' => false,
                'is_thoughts' => false,
                'content' => <<<'HTML'
<p>
  <a href="https://touchbaseapp.co" class="underline" target="_blank">Touch Base</a> was fine. It was a cool project. It worked. But, let&apos;s face it—was it usable? (In case you don't know what Touch Base is, it's a full stack React contacts management app that I made).
</p>

<p>
  I was thinking about this and realized something obvious. When a user starts using Touch Base they have to add contacts manually. Which might be fine if you have 5 contacts. If you have 1,000 contacts you want to add, this sucks… and you probably won&apos;t want to use this system. So of course, I knew I had to add the ability to import contacts.
</p>

<h2 class="text-2xl">Researching Options</h2>

<p>
  My first Google search was "csv importers", or something like that. I looked through some of the options available and found FlatFile. Their main heading read "The fastest way to collect, onboard and migrate data." Perfect… except, it wasn&apos;t all that for me. Now, this is probably my fault (they seem like an amazing service) but the process of implementing their importer was taking more effort than I was willing to put in for this. This is the perfect time for a little sidebar context:
</p>

<p class="aside">
  Lately, I&apos;ve been really valuing scrappiness. I want to get things done, fast. This isn&apos;t about cutting corners, I just don&apos;t want to have any excuses or unnecessary delays. After all, I&apos;m just one guy working on side projects. So my current attitude is fail, learn, and iterate fast. All while doing good work.
</p>

<p>
  Back to FlatFile. As much as I wanted to use their promising software I asked myself if I really needed all their bells and whistles and if fighting their docs was worth it. Definitely not. So I went back to my search and landed on Papa Parse. I recalled seeing it in my previous search. Their main heading read "The powerful, in-browser CSV parser for big boys and girls." 😆 I was in.
</p>

<h2 class="text-2xl">Implementation</h2>

<p>First things first, I added a POST route to my API.</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/route.png"
  alt="import-contacts POST route"
  width="1754"
  height="238"
>

<p>
  <code class="custom-inline-code">verifyToken</code> is a function I use in all my routes that does exactly that—verifies the users id token. I use multer in my app which is a node.js middleware for handling file uploads. <code class="custom-inline-code">upload.single(&apos;file&apos;)</code> is a multer function that helps me upload files to my s3 bucket.
</p>

<p>
  Inside the route, I grab the user id and file through destructuring.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/user-id_and_file.png"
  alt="code displaying the extraction of a user id and file properties from the request through the use of destructuring"
  width="1754"
  height="390"
>

<p>
  Like the npm package docs for Papa Parse state, "Papa Parse can parse a Readable Stream instead of a File when used in Node.js environments (in addition to plain strings)."
</p>

<p>
  So I prepared to stream the file directly to Papa Parse by creating said stream from my s3 bucket as well as an empty array to hold the results data. Can&apos;t forget about handling potential errors.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/stream-file.png"
  alt="create a read stream of a file from an s3 bucket"
  width="1214"
  height="618"
>

<p>
  Then I finally pass the stream to Papa Parse, set my config options and handle any errors coming from the results.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/stream-to-papa_parse.png"
  alt="passing the stream directly to Papa Parse"
  width="1450"
  height="618"
>

<p>
  In the code above, <code class="custom-inline-code">complete</code> is a Papa Parse property that takes a callback function. It executes once the parsing is complete. I then grab a hold of the data provided by <code class="custom-inline-code">results</code> as <code class="custom-inline-code">parsedData</code>.
</p>

<p>
  After this, it&apos;s time to run some queries on the database and process the contacts. But, I need to store a connection the the db to run the queries on first.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/connection-to-db.png"
  alt="code displaying the storing of a database connection"
  width="844"
  height="238"
>

<p>
  This next part is a lot of code in a try catch statement, so I&apos;ll just give it to you straight with some comments on it.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/process-contacts.png"
  alt="processing and conditionally inserting contacts data into a PostgresQL database table"
  width="1724"
  height="2708"
>

<p>As you can see, I</p>
<ul>
  <li>
    fetch existing contacts
  </li>
  <li>
    filter out duplicate contacts using emails, since no two emails can be the same
  </li>
  <li>
    bulk insert the non-duplicate contacts into the table
  </li>
</ul>

<h2 class="text-2xl">Frontend</h2>

<p>
  The frontend will be largely specific to my approach of the app, but let&apos;s connect the dots here.
</p>

<p>
  The Import Contacts page does one thing so it&apos;s very simple. I use the native file upload button which is really an input.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/file-input.png"
  alt="native input element that accepts .csv files and triggers a handling function"
  width="1858"
  height="238"
>

<p>
  When the input detects a change I trigger a <code class="custom-inline-code">handleFileUpload</code> function.
</p>

<p>
  Inside of the <code class="custom-inline-code">handleFileUpload</code> function, I first set the loading state to true so that I can display my little loading spinner to the user while this process takes place.
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/handle-file-upload.png"
  alt="code displaying a loading state being set to true at the beginning of a function"
  width="780"
  height="314"
>

<p>
  When a user successfully uploads their .csv file, I append it to a new <code class="custom-inline-code">formData</code> object and send it to my backend route above to process it. I directly use a fetch request here since it's the only place in my app that's going to hit the <code class="custom-inline-code">/import-contacts</code> endpoint. If another part of my app needed to hit the route, I would store the request using context and use that to avoid repeating code. Also, you can see the error handling I have set up…
</p>

<img
  src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/import-contacts/send-to-backend.png"
  alt="code displaying the sending of a file and handling of the response from an api endpoint"
  width="1640"
  height="2138"
>

<p>
  Upon successful handling of the file or if it errors out, the loading state gets set back to false, and I trigger an appropriate toast alert to let the user know exactly what happened in a nice way.
</p>

<p>
  It feels so nice to log in, upload a .csv file of contacts, get a successful toast alert, and then see all of the new contacts populated in your account. And it's so quick. You might see the loading spinner for just a second. The bulk insert query also helps a lot there.
</p>

<h2 class="text-2xl">From Maybe Usable to Usable</h2>

<p>
  Before adding this feature I wondered how usable the app truly was. Now, there&apos;s no question about that. Although it wasn&apos;t super complex, it&apos;s a feature you would expect to see in this type of application so I found it a requirement to implement. I think it makes it a little more serious of a project. Aside from that, I&apos;ve never done anything with .csv files which made this super fun to work on. Papa Parse integrated so well with all the tools I was already using which made it super easy. I definitely recommend using it.
</p>

<p>
  If you made it this far, cheers to you for reading this 🥂...
  and cheers to software that doesn&apos;t suck 🥂
</p>

<p>
  p.s I'm still wondering if my project sucks 😂
  If you want to check it out <a href="https://touchbaseapp.co" class="underline">here&apos;s the link again</a>.
</p>

<p>Til next time!</p>
HTML
            ],
            [
                'id' => 2,
                'user_id' => 1,
                'created_at' => '2024-12-12 17:11:08',
                'updated_at' => '2024-12-12 17:11:08',
                'published_at' => '2024-12-12 17:11:08',
                'title' => 'Getting My First Users From Building Something Unexpected',
                'subtitle' => null,
                'preview_text' => 'How I built my first web game in a weekend and got 1K+ users overnight through Reddit and viral sharing. Lessons learned from going from zero to first users.',
                'slug' => 'getting-my-first-users-from-building-something-unexpected',
                'status' => 'published',
                'is_freelance' => false,
                'is_web_development' => false,
                'is_tech' => false,
                'is_life' => false,
                'is_entrepreneurship' => true,
                'is_side_project' => true,
                'is_product_review' => false,
                'is_thoughts' => false,
                'content' => <<<'HTML'
<p>
This one has to start with the story. I&rsquo;ll try to keep it short.
</p>

<h2 class="text-2xl">A Random Memory</h2>

<p>
When I was younger, say in my teens, I would do this thing in my head where I would double numbers. Sometimes random numbers, but most of the time from the number 2. So for example, 2, 4, 8, 16, etc. And I put a mental timer on it, so my goal was to see how fast I could do it without thinking much and see how far I could take it.
</p>

<p class="aside">
Side-note: I don&rsquo;t know why I did that. I was never big on math. It was like a mental fidget during random in-between moments.
</p>

<p>
I had absolutely forgotten that I did that. Three months ago, I suddenly remembered while I was having lunch with my wife. I asked if she&rsquo;d ever done anything like that, and yup, you guessed it&mdash;she hadn&rsquo;t. Now, I&rsquo;ve never been interested in building a web game, but one of the next thoughts I had was &ldquo;I have to build this thing&rdquo;.
</p>

<p>
Okay stop. Story over. There you have it, that&rsquo;s the unexpected thing. I built a web game. BUT, please don&rsquo;t leave just yet. I also want to tell you about what happened after I built the game.
</p>

<h2 class="text-2xl">Building and Sharing</h2>

<p>
Building the game took me about a couple days, it was done in a weekend (this post isn&rsquo;t about the code, so I won&rsquo;t get into that). I didn&rsquo;t focus on making it look fancy or anything like that. I made it for myself, as an ode to the memory of an old mental fidget. I did however, know I would take a chance on sharing it. After all, if people like it, they&rsquo;ll like it for the experience, not a shiny UI. By the way, it&rsquo;s called <a href="https://playdoubles.org" class="underline !text-blue-600">Doubles</a>.
</p>

<p class="mb-2">
Enter Reddit. I went looking for the right subreddits and ended up posting in these:
</p>

<ul>
<li>r/math</li>
<li>r/gamedev</li>
<li>r/IndieDev</li>
<li>r/learnmath</li>
<li>r/WebGames</li>
<li>r/IndieGaming</li>
</ul>

<p>
Sharing on Reddit taught me that the right audience will amplify visibility.
</p>

<p>
Right away, and to my complete surprise, strangers on the internet loved it. I got responses like this:
</p>

<img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Doubles/Doubles_Reddit_1.png" alt="Reddit user comment challenging and exciting nature of the timer aspect of Doubles game" class="rounded" width="748" height="142">

<img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Doubles/Doubles_Reddit_2.png" alt="Reddit user comment stating he shared the Doubles game in a group chat with friends" class="rounded" width="585" height="114">

<img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Doubles/Doubles_Reddit_3.png" alt="Reddit user comment posted his share-able score and saying how funny it is for addicts to calculation" class="rounded" width="380" height="228">

<img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Doubles/Doubles_Reddit_4.png" alt="Reddit user comment about Doubles stating how fun it is to see how high you can go" class="rounded" width="440" height="124">
<br />

<p>
🤯🤯🤯 As the title of this post suggests, these are my first-ever users. A.K.A. you&rsquo;re watching me create my first public side project, learn how to get and interact with users, and iterate on a project based on those interactions.
</p>

<p>
I have to say, getting users on something you built, and having positive feedback has to be one of the best feelings ever. Not in an ego way, in a purely shocking way. It&rsquo;s gotta be the &ldquo;indie dev&rsquo;s&rdquo; version of a musician&rsquo;s first time hearing themselves on the radio. Alright, chill&mdash;I&rsquo;m dating myself 🤣.
</p>

<p>
The first few days my Cloudflare analytics showed somewhere around <strong>200&mdash;300 users</strong> had visited the site. That was incredible already. Then, days after not having posted anything, I checked the analytics and there was a spike of <strong>1K+ visitors overnight!</strong> Whaat?? Excuse mee?! I started investigating.
</p>

<p>
It turns out they were all referred by <a href="https://B3ta.com">B3ta.com</a>. A UK based newsletter. I&rsquo;m not sure how long they&rsquo;ve been around, but they claim it &ldquo;currently has nearly 80,000 subscribers&rdquo;. Someone on their team must have seen my game, liked it enough, and shared it to their subscriber base. They also share a version of their newsletter on their website, and guess what? I FOUND IT. Here&rsquo;s what they shared:
</p>

<img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/Doubles/B3ta_write_up_on_Doubles.png" alt="Comedic summary of Doubles game by B3ta newsletter" class="rounded" width="609" height="161">

<p>
Hahaha. Good by me.
</p>

<p>
Fast forwarding a bit, I saw traffic from them trickle in for a long time. Nothing as big as the first couple days after they shared, but it was amazing enough. I&rsquo;ll never forget that.
</p>

<p>
Since then, I still haven&rsquo;t shared anything new, but I saw Doubles get picked up by another couple sites. One was <a href="https://www.mattrutherford.co.uk/" class="underline">this guy&rsquo;s website</a>. Shoutout to him. I saw a small amount come from there, but he never had to do that in the first place. Another is a site called <a href="https://cloudhiker.net/" class="underline">CloudHiker</a>. I see a couple visitors from that site every day. I&rsquo;m not sure how it ended up there.
</p>

<p>
Traction continued for a couple months every single day all on its own. I saw anywhere from 20-80 regular users a day. I know because they were navigating directly to the site, not from any referrer.
</p>

<h3 class="font-bold">Monetization</h3>

<p>
Nothing to report here, lol!
</p>
<p>
I tried to figure out a way, but this kind of site is not easy to monetize. And as far as ads go, no worthwhile ad service wants to serve ads on my little game website. Oh well. This is something I will consider more deeply ahead of future projects, but not everything needs to make money.
</p>

<h2 class="text-2xl">
How&rsquo;s It Doing Today?
</h2>

<p>
Truthfully, it&rsquo;s died down hahaha. I never talked about it again, and obviously I think that was a mistake, but you can consider this the start of me talking about it again. You can still play it here <a href="https://playdoubles.org" class="underline !text-blue-600">Doubles</a>.
</p>

<p class="mb-2">
<strong>Here&rsquo;s what I learned</strong>:
</p>

<ul>
<li>
Picking the right project matters.
</li>
<li>
As a solo creator, I can make decisions, build, iterate, fail, and learn fast.
</li>
<li>
Caring about user feedback was highly valuable. Talking to the users and responding to them as soon as I implemented a feature request or bug fix is major and made them feel closer to the project. For example, after working with one of my users requests, he replied like this: <span class="!italic">&ldquo;Love to see a dev actively responding and excited for feedback :)&rdquo;</span>
</li>
<li>
You spent time and effort building something, you should do the same for communicating and marketing it.
</li>
<li>
Some users will give you the best ideas to make your project better. Build relationships with them.
</li>
</ul>

<p>
There you have it. That&rsquo;s my story of getting my very first users from a game.
</p>

<p>
Thanks for sticking around until the end.
</p>

<p>
If you enjoyed this content, stay tuned for more updates on the projects I build, along with more stories and lessons, by subscribing below (no spam). And if you haven't already, click on one of the emoji&rsquo;s on this page!
</p>

<p>Until next time!</p>
HTML
            ],
            [
                'id' => 3,
                'user_id' => 1,
                'created_at' => '2025-05-05 19:30:46',
                'updated_at' => '2025-05-05 19:30:46',
                'published_at' => '2025-05-05 19:30:46',
                'title' => 'How to Use Laravel Sail with Docker for PHP 8.2 (No Global PHP Upgrade Needed)',
                'subtitle' => null,
                'preview_text' => 'Run Laravel with PHP 8.2+ using Laravel Sail and Docker without upgrading your system\'s PHP version. Perfect for managing multiple projects.',
                'slug' => 'laravel-sail-docker-php82-without-system-upgrade',
                'status' => 'published',
                'is_freelance' => false,
                'is_web_development' => true,
                'is_tech' => true,
                'is_life' => false,
                'is_entrepreneurship' => false,
                'is_side_project' => false,
                'is_product_review' => false,
                'is_thoughts' => false,
                'content' => <<<'HTML'
<p>Working on a Laravel project that requires a newer PHP version can be tricky if your system&rsquo;s PHP is older. My personal computer is a Mac, but my work computer is a Linux machine where I sometimes run small projects for exploring and learning new technologies. In that case, upgrading my global PHP installation is not an option since I'd risk messing with work projects. This is exactly the kind of situation Laravel Sail is for.&nbsp;Laravel Sail lets you use Docker to run your Laravel app with the required dependencies, all while keeping your global system versions untouched.</p>
<p>Here is how I set up new Laravel projects on a Linux computer (works on macOS, Linux, or Windows via WSL2) with Sail and the latest versions of PHP (without touching the global version).</p>
<h2 class="text-2xl">First, get your project and terminal ready</h2>
<p>Once you have your Laravel project files ready it's time to run some commands.</p>
<ul>
<li>If you're using a Laravel starter kit with Inertia and React or Vue, the installation process might have already run <code class="custom-inline-code">npm install</code>&nbsp;for you. If not, go ahead and run that. Otherwise, skip this command.</li>
<li>Now, try running <code class="custom-inline-code">composer install</code>.<br>If you get an error because you have an older version of PHP than required...good! We're on the same page.</li>
</ul>
<p>Next, we need to run a temporary Docker container to get the latest versions of the required dependencies. Run this command:<br><code class="custom-inline-code">docker run --rm \&nbsp;-u "$(id -u):$(id -g)" \&nbsp;-v "$PWD":/var/www/html \&nbsp;-w /var/www/html \&nbsp;laravelsail/php82-composer:latest \&nbsp;composer install</code></p>
<p><strong>What the above command does</strong>:<br>It spins up a temporary Docker container using the Laravel Sail PHP 8.2 image, executes <code class="custom-inline-code">composer install</code> inside the project folder, and then stops and removes the container.</p>
<ul>
<li><code class="custom-inline-code">docker run --rm</code>: Start a new container, and remove it (--rm) when it&rsquo;s done (so it won&rsquo;t hang around on your system).</li>
<li><code class="custom-inline-code">-u "$(id -u):$(id -g)</code>: Run the container with your user&rsquo;s UID:GID. This ensures any files Composer creates (like the vendor folder) will have the correct permissions matching your user, not root.</li>
<li><code class="custom-inline-code">-v "$PWD":/var/www/html</code>: This command mounts your current host directory into the container at <code class="custom-inline-code">/var/www/html</code>, allowing the container to access and modify files in your project.</li>
<li><code class="custom-inline-code">-w /var/www/html</code>: This sets the working directory inside the container to <code class="custom-inline-code">/var/www/html</code>, ensuring that subsequent commands run in the correct context.</li>
<li><code class="custom-inline-code">laravelsail/php82-composer:latest</code>: This specifies the Docker image to use. It&rsquo;s an image with PHP 8.2 and Composer installed (provided by Laravel Sail).</li>
<li><code class="custom-inline-code">composer install</code>: This is the command we want to run inside the container. It will install all the dependencies as if you ran it on a machine with PHP 8.2.</li>
</ul>
<h2 class="text-2xl">Configure Sail and Docker</h2>
<p>Run the Sail installation (Artisan) command inside Docker. This command publishes the <code class="custom-inline-code">docker-compose.yml</code> file and updates your <code class="custom-inline-code">.env</code> with environment variables for Docker.<br>
</p>
<p class="aside">Note: If you want to use a different database in your project rather than the default MySQL, add the <code class="custom-inline-code">--with=</code> flag to the command. To keep the default MySQL db, omit the additional flag.
</p>
<p>Run:<br><code class="custom-inline-code">docker run --rm \ -u "$(id -u):$(id -g)" \ -v "$(pwd)":/var/www/html \ -w /var/www/html \ laravelsail/php82-composer:latest \ php artisan sail:install --with=pgsql</code></p>
<p>This docker command is similar to the previous one, except now we're executing the <code class="custom-inline-code">artisan sail:install</code> setting up Docker/Sail along with the optional PostgreSQL db configuration.</p>
<p>You should see a <code class="custom-inline-code">docker-compose.yml</code> file in the root of your project now.</p>
<p><strong>Note</strong>: The values added to your .env (and the ones in docker-compose.yml) are mostly default/local settings. For example, Sail might set <code class="custom-inline-code">DB_PASSWORD=password</code> and <code class="custom-inline-code">DB_USERNAME=sail</code> (or <code class="custom-inline-code">postgres</code>) for your database, which are local credentials for the Docker containers.<br>If you're anything like me and have multiple Laravel projects running at the same time, you might need to adjust port numbers. For instance, you probably need to add <code class="custom-inline-code">APP_PORT</code> in the <code class="custom-inline-code">.env</code> file and customize the value with something like <code class="custom-inline-code">APP_PORT=7070</code> to have your app run on port <code class="custom-inline-code">7070</code> instead of the default port <code class="custom-inline-code">80</code>, where <code class="custom-inline-code">80</code> is already in use. Just make sure you update your <code class="custom-inline-code">docker-compose.yml</code> file to match this. The same is true for <code class="custom-inline-code">SERVER_PORT</code>, and <code class="custom-inline-code">SERVER_HOST</code> (and <code class="custom-inline-code">VITE_PORT</code>, if you have an inertia frontend).</p>
<h2 class="text-2xl">It's time to launch Sail</h2>
<p>Run:<br><code class="custom-inline-code">./vendor/bin/sail up -d</code>. OR<br><code class="custom-inline-code">sail up -d</code>, if you already created the alias for sail.<br>The <code class="custom-inline-code">-d</code> flag runs containers in the background and frees up your terminal shell.</p>
<p>At this point, the above command should run successfully.</p>
<p>If you cloned a repo your <code class="custom-inline-code">.env</code> file won't have an app key value. If this is true for you, run this command while Sail is running: <code class="custom-inline-code">sail artisan key:generate</code>.</p>
<p>Now, run migrations: <code class="custom-inline-code">sail artisan migrate</code>.</p>
<p>If you're using Inertia, this is where you want to start the frontend application: <code class="custom-inline-code">sail composer run dev</code>.</p>
<p>Congrats, now you can happily code to your programmer hearts content. Go build, but don't forget to ship!</p>
HTML
            ],
            [
                'id' => 4,
                'user_id' => 1,
                'created_at' => '2025-05-27 16:42:12',
                'updated_at' => '2025-05-27 16:42:12',
                'published_at' => '2025-05-27 16:42:12',
                'title' => 'You Don\'t Need A Framework - Build A Dynamic Blog with HTML & Vanilla JavaScript',
                'subtitle' => null,
                'preview_text' => 'Learn to build a dynamic blog using only HTML and vanilla JavaScript - no frameworks needed. Simple, refreshing approach to web development.',
                'slug' => 'you-dont-need-a-framework',
                'status' => 'published',
                'is_freelance' => false,
                'is_web_development' => true,
                'is_tech' => false,
                'is_life' => false,
                'is_entrepreneurship' => false,
                'is_side_project' => false,
                'is_product_review' => false,
                'is_thoughts' => false,
                'content' => <<<'HTML'
<p>Months ago, when I was reworking parts of my website, I began questioning every part of the tech stack. During that process, I thought about how I would build a dynamic blog with vanilla JavaScript. Eventually, I realized I was still going to end up using a framework. So, I worked through the main concepts in my head to scratch the itch, then shelved the idea...until, I couldn't ignore the fact that the itch was still there.</p>
<p class="aside">Note: This article is simply about the JavaScript side of building a dynamic blog. It is not a claim on the best approach for such a system, nor an argument for or against using vanilla JS or a framework. We're just looking at <strong>how</strong> this could get done without one.</p>
<h2 class="text-2xl">Let's get into it</h2>
<p>First things first, we need a few HTML and JS files, so let's get a new project going in your favorite editor (feel free to code along).</p>
<p>Create a new folder, name it whatever you want, and open it in your editor. Create the following files and folders:</p>
<ul>
<li>index.html</li>
<li>blog.html</li>
<li>blog/post.html</li>
<li>js/blogCards.js</li>
<li>js/blogPost.js</li>
<li>js/blogPostsData.js</li>
</ul>
<p class="aside">No Webpack, no Vite, no package.json... and no Tailwind 🤯. Ahhh, how refreshing.</p>
<h2 class="text-2xl">Boilerplate code</h2>
<p>Here is the relevant HTML</p>
<p><strong>blog.html</strong>:</p>
<ul>
<li>Include the script tag for <code class="custom-inline-code">blogCards.js</code> in the head<br><code class="custom-inline-code">&lt;script type="module" src="/js/blogCards.js" async&gt;&lt;/script&gt;<br></code><br><img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/tinymce-images/1748359382136-blog-html_opt.png" alt="screenshot of code in blog.html" width="474" height="322"></li>
</ul>
<p><strong>blog-post.html</strong>:</p>
<ul>
<li>Include the script tag for <code class="custom-inline-code">blogPost.js</code> in the head<br><code class="custom-inline-code">&lt;script type="module" src="/js/blogPost.js" async&gt;&lt;/script&gt;<br></code><br><img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/tinymce-images/1748359763823-blog-post-html_opt.png" alt="screenshot of code in blog-post.html" width="471" height="400"></li>
</ul>
<p>Also, the blog post data</p>
<p><strong>blogPosts.js</strong>:</p>
<ul>
<li>Add as many blog post objects as you want. I had ChatGPT generate some dummy data here.<br><br><img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/tinymce-images/1748359961902-blog-posts-js_opt.png" alt="screenshot of code in blogPosts.js" width="474" height="239"></li>
</ul>
<h2 class="text-2xl">Start and preview</h2>
<p>This is a good time to start the project to see what we have so far. If you're using something like VS Code, view the project using <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" class="underline" target="_blank">Live Server</a>.</p>
<h2 class="text-2xl">Dynamically populate the blog listing page with blog-post cards</h2>
<p>Let's start by importing the data at the top of the <code class="custom-inline-code">blogCards.js</code> file:</p>
<ul>
<li><code class="custom-inline-code">import { blogPosts } from "./blogsPosts.js"</code></li>
</ul>
<p>We're going to have to place each blog card inside of a the container element we created in the blog listing page, so let's declare a <code class="custom-inline-code">blogCardsContainer</code> variable and store a reference to the container in it:</p>
<ul>
<li><code class="custom-inline-code">const blogCardsContainer = document.querySelector("#blog-cards-container");</code></li>
</ul>
<p>Now, we can loop over each blog post in our data, create the cards, and then finally append them to <code class="custom-inline-code">blogCardsContainer</code>:</p>
<p><img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/tinymce-images/1748361172685-blog-cards-html_opt.png" alt="screenshot of code in blogCards.js" width="476" height="288"></p>
<p>The first three lines inside of the forEach loop:</p>
<ul>
<li>Creates a div element to be styled as the card</li>
<li>Adds a "blog-card" class to the div</li>
<li>Sets a "data-id" attribute on the div with the value of current post id to uniquely identify each blog post card (in case you want control for individual cards).</li>
</ul>
<p>Here's one of the most important parts of the <code class="custom-inline-code">blogCardHTML</code> content we created above: We set the href attribute to the individual post.html page, but, and&nbsp;<strong>here it is</strong>, we add in a <code class="custom-inline-code">slug</code> parameter which is the value of the blog post slug. <strong>This is how the individual post.html page knows what blog post it's supposed to be loading when navigated to</strong>.</p>
<p>Now that we know which post is supposed to be showing, all we have to do is create the HTML structure for our blog post and load in the post data, similar to how we did for the blogCards - except we're not doing a loop this time. Let's apply the logic...</p>
<h2 class="text-2xl">Dynamically building the individual blog post page</h2>
<p>When our post.html file loads, we already know that we're going to have a post slug as a parameter. This is how we know which post to work with, so let's set it up.</p>
<ul>
<li>At the top of <strong>blogPost.js</strong>, import <code class="custom-inline-code">blogPosts</code></li>
</ul>
<p>You may know about the <code class="custom-inline-code">window.location</code> object. But, to isolate the query parameters from the URL, we can access the <code class="custom-inline-code">search</code> property on window.location, and we'll pass that into the <code class="custom-inline-code">URLSearchParams</code> interface:</p>
<ul>
<li><code class="custom-inline-code">const params = new URLSearchParams(window.location.search);</code></li>
</ul>
<p style="padding-left: 40px;">The URLSearchParams interface exposes a 'get' utility method allowing us to retrieve the exact parameter we're looking for:</p>
<ul>
<li><code class="custom-inline-code">const slug = params.get("slug");</code></li>
</ul>
<p style="padding-left: 40px;">Perfect. Now, let's find the exact post:</p>
<ul>
<li><code class="custom-inline-code">const blogPost = blogPosts.find((post) =&gt; post.slug === slug);</code></li>
</ul>
<p style="padding-left: 40px;">Like with the blogCards, let's grab the blog post container on our post.html file so that we know where to inject the post after we build it:</p>
<ul>
<li><code class="custom-inline-code">const blogPostContainer = document.querySelector("#blogPost");</code></li>
</ul>
<p>Okay, now let's build the blog post HTML structure, and inject into the blog post container, but only on the condition that the post was actually found. For now, we handle the situation where the post isn't found by displaying some simple text.</p>
<p><img src="https://nsdysbxlabtmtxscxqvw.supabase.co/storage/v1/object/public/personal-website/tinymce-images/1748362762733-blog-post-js_opt.png" alt="screenshot of code in blogPost.js" width="480" height="248"></p>
<h2 class="text-2xl">Try it out</h2>
<p>Go back to the blog listing page. Navigate to different posts, and watch them be displayed onto the page.</p>
<p>🎉 Congrats! You now know some essential concepts needed to build a dynamic blog system in vanilla JavaScript 🎉</p>
<p>If all this has made you curious to find out how much more it would take to get this blog to a complete, production-ready level, I encourage you to <strong>scratch that itch</strong> - It'll be worth it.</p>
<p>Here's a hint to some modifications and optimizations that would make this project better:</p>
<ul>
<li>SPA experience
<ul>
<li>load all content and pages using a single div in the index.html file, just like frameworks do</li>
<li>this will offer better URLs and faster load times since you won't be loading full pages</li>
</ul>
</li>
<li>Store blog posts in an external db</li>
<li>Use a mouseover event listener on blog post cards to prefetch html content</li>
</ul>
<h2 class="text-2xl">Conclusion</h2>
<p><em>Although there are many changes you could make to this project, the point is you don't always need every framework feature. Often, all you need is simplicity.</em></p>
<p>If this article helped you learn something, I'm so glad. But there are three important takeaways I hope you&rsquo;ll leave with:</p>
<ol>
<li>Remember to question things from time to time.</li>
<li>Go beyond the question, and let your curiosity scratch the itch (think about the solution)</li>
<li>You don't always need a framework 😏️</li>
</ol>
HTML
            ],
        ];

        DB::table('posts')->insert($posts);
    }
};
