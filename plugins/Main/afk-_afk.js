export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
    
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
        let caption = `
  ${conn.getName(m.sender)} ${tag} berhenti AFK ${user.afkReason ? ' setelah ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `.trim()
  let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah ayang', 'jagain lilin', 'beli pop es', 'kawin lari', 'main kelereng', 'petak umpet', 'push renk', 'push up joni', 'olahraga', 'onani', 'beraq', 'open bo', 'di suruh emak', 'kerja']
    conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid }})
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        let tag = `@${m.sender.replace(/@.+/, '')}`
        let mentionedJid = [m.sender]
        let caption = `
  Jangan tag ${conn.getName(jid)} ${tag}!
  Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim()
    conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid }})
    
    }
    return true
}
