<?php
/**
 * @var \App\View\AppView $this
 * @var array $params
 * @var string $message
 */
if (!isset($params['escape']) || $params['escape'] !== false) {
    $message = h($message);
}
?>
<div class="alert alert-danger alert-dismissible fade show d-flex align-items-center gap-2" role="alert">
    <i class="bi bi-exclamation-octagon"></i>
    <div><?= $message ?></div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="<?= __('Close') ?>"></button>
</div>
