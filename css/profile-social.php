
      <div class="profile profile-social">
<?php

$socials = GetUserValue('user_social',1);


if (!empty($socials))
{
  $socials_ = explode(";",$socials);
  foreach ($socials_ as $social) {
    if (!empty($social))
    {
      $parts = explode("@",$social);

      $social_link = "";
      $social_icon = "";
      $social_name = "";

      switch ($parts[0]) {
        case 'facebook':
          $social_link = "https://facebook.com/".$parts[1];
          $social_name = "facebook.com/".$parts[1];
          $social_icon = "facebook";
          break;
        case 'linkedin':
          $social_link = "https://linkdedin.com/in/".$parts[1]."/";
          $social_name = "linkdedin.com/in/".$parts[1];
          $social_icon = "linkedin";
          break;
        case 'twitter':
          $social_link = "https://twitter.com/".$parts[1];
          $social_name = "@".$parts[1];
          $social_icon = "twitter";
          break;
        case 'youtube':
          $social_link = "https://youtube.com/".$parts[2];
          $social_name = "youtube.com/".$parts[1];
          $social_icon = "youtube";
          break;
        case 'github':
          $social_link = "https://github.com/".$parts[1];
          $social_name = "github.com/".$parts[1];
          $social_icon = "github";
          break;
      }

      if ($social_link != "")
      {

      ?>          <p>
          <span class="fa-stack fa-lg clearfix">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-<?php echo $social_icon; ?> fa-stack-1x fa-inverse"></i>
          </span>
          <br>
          <a href="<?php echo $social_link; ?>" target="_blank" rel="noopener noreferrer" class="nolink"><?php echo $social_name; ?></a>
        </p>

<?php
      }
    }
  }
}

?>
        <!-- <p>
          <span class="fa-stack fa-lg clearfix">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          <br>
          facebook.com/aslanking
        </p>
        <p>
          <span class="fa-stack fa-lg clearfix">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
          <br>
          @aslanking
        </p> -->
        
<?php EditCogWheel("edit-profile_social",false,"social_media"); ?>
      </div>
    </div>
